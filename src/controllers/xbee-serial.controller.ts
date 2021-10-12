/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ReadingsRepository } from '../data-access/repositories/readings.repository';
import * as moment from 'moment';

@Injectable()
export class XbeeSerialController implements OnModuleInit {
  constructor(private readonly readingsRepository: ReadingsRepository) {}
  onModuleInit(): void {
    try {
      const SerialPort = require('serialport');
      const xbee_api = require('xbee-api');
      const C = xbee_api.constants;

      const xbeeAPI = new xbee_api.XBeeAPI({
        api_mode: 1,
      });

      const serialport = new SerialPort('/dev/ttyUSB0', {
        baudRate: 9600,
      });

      serialport.pipe(xbeeAPI.parser);
      xbeeAPI.builder.pipe(serialport);

      serialport.on('open', function() {
        const frame_obj = {
          // AT Request to be sent
          type: C.FRAME_TYPE.AT_COMMAND,
          command: 'NI',
          commandParameter: [],
        };

        xbeeAPI.builder.write(frame_obj);
      });

      // All frames parsed by the XBee will be emitted here
      xbeeAPI.parser.on('data', (frame) => {
        const buf = frame.data;
        buf && console.log(buf.toString('utf8'));
        if (buf) {
          const reading = buf.toString('utf8').split(',');
          const deviceNumber = Number(reading[0].replace('d', ''));
          const temperature = Number(reading[1].replace('t', ''));
          const humidity = Number(reading[2].replace('h', ''));
          const vapor = Number(reading[3].replace('v', ''));
          const battery = Number(reading[4].replace('b', ''));
          const lastUpdate = moment(
            `${reading[5]} ${reading[6]}`,
            'DD/MM/YY hh:mm:ss',
          ).toDate();
          this.readingsRepository.addReading(
            deviceNumber,
            temperature,
            humidity,
            vapor,
            battery,
            lastUpdate,
          );
        }
      });
      xbeeAPI.parser.on('error', (error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
      this.onModuleInit();
    }
  }
}
