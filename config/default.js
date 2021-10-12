module.exports = {
  app: {
    port: 3000,
    localhostIp: '127.0.0.1',
  },
  typeorm: {
    host: '127.0.0.1',
    synchronize: false,
    username: 'test',
    password: 'test',
    database: 'nestjs-template-db',
    port: '5432',
    logging: true,
  }
};
