import { ConnectionOptions } from 'typeorm';
import { get } from 'config';
import { ReadingsModel } from './models/readings.model';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  port: parseInt(get('typeorm.port') || '5432'),
  synchronize: get('typeorm.synchronize'),
  logging: get('typeorm.logging') === 'true',
  host: get('typeorm.host') || 'localhost',
  username: get('typeorm.username'),
  database: get('typeorm.database'),
  password: get('typeorm.password'),
  entities: [ReadingsModel],
  extra: {
    min: 1,
    max: 10,
  },
};
