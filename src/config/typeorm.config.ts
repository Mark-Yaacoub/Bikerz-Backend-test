import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();
import * as fs from 'fs';

const dbUrl = process.env.URL;

const parsedDbUrl = new URL(dbUrl);
console.log(parsedDbUrl);

const caCert = fs.readFileSync('ca.pem');

console.log('Database URL:', dbUrl);
console.log('Hostname:', parsedDbUrl.hostname);
console.log('Port:', parsedDbUrl.port);
console.log('Username:', parsedDbUrl.username);
console.log('Password:', parsedDbUrl.password);
console.log('Database name:', parsedDbUrl.pathname.replace('/', ''));

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: parsedDbUrl.hostname,
  port: parseInt(parsedDbUrl.port, 10),
  username: parsedDbUrl.username,
  password: parsedDbUrl.password,
  database: parsedDbUrl.pathname.replace('/', ''),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
  ssl: {
    rejectUnauthorized: false,
    ca: caCert,
  },
};
