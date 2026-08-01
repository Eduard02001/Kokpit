import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'typeorm',
  (): TypeOrmModuleOptions => ({
    type: 'mssql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 1433),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    options: {
      encrypt: process.env.DB_ENCRYPT === 'true',
    },
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  }),
);
