import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
// import { BookController } from './controllers/book.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookService } from './services/book.service';
import { ReadingsRepository } from './data-access/repositories/readings.repository';
import { ReadingsModel } from './data-access/models/readings.model';
import { connectionOptions } from './data-access/connection.options';
import { XbeeSerialController } from './controllers/xbee-serial.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    TypeOrmModule.forFeature([ReadingsModel]),
  ],
  controllers: [AppController],
  providers: [AppService, ReadingsRepository, XbeeSerialController],
})
export class AppModule {}
