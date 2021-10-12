/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const config = require('config');

module.exports = {
  type: 'postgres',
  synchronize: false,
  host: config.get('typeorm.host'),
  port: config.get('typeorm.port'),
  username: config.get('typeorm.username'),
  password: config.get('typeorm.password'),
  database: config.get('typeorm.database'),
  entities: ['src/**/*.model.ts'],
  migrations: ['src/data-access/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/data-access/migrations',
  },
  logging: true,
};
