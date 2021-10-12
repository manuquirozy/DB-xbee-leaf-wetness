import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReadingsModel } from '../models/readings.model';

@Injectable()
export class ReadingsRepository {
  constructor(
    @InjectRepository(ReadingsModel)
    private readonly readingsRepository: Repository<ReadingsModel>,
  ) {}

  async addReading(
    deviceNumber: number,
    temperature: number,
    humidity: number,
    vapor: number,
    battery: number,
    lastUpdate: Date,

    ): Promise<ReadingsModel> {
    console.log('About to add a new reading');
    const newReading = new ReadingsModel();

    newReading.deviceNumber = deviceNumber;
    newReading.temperature = temperature;
    newReading.humidity = humidity;
    newReading.vapor = vapor;
    newReading.battery = battery;
    newReading.lastUpdate = lastUpdate;

    const DBResult = await this.readingsRepository.insert(newReading);
    const result: ReadingsModel = newReading;

    result.id = DBResult.identifiers[0].id;
    console.log(`Adding new reading to DB, device ${result.deviceNumber} at ${result.lastUpdate} added`);

    return result;
  }

  // async getBooks(name: string): Promise<ReadingsModel[]>{
  //   const DBResult = name ?
  //     await this.readingsRepository.createQueryBuilder('book')
  //       .where("book.name like :name", { name:`%${name}%` }).getMany() :
  //     await this.readingsRepository.find();
  //   return DBResult;
  // }
}
