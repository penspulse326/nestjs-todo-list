import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('database', (): TypeOrmModuleOptions => ({
  autoLoadEntities: true,
  database: process.env.DB_DATABASE || 'todo_list_db',
  host: process.env.DB_HOST || 'localhost',
  logging: process.env.NODE_ENV !== 'production',
  password: process.env.DB_PASSWORD || '1234',
  port: parseInt(process.env.DB_PORT!, 10) || 5432,
  synchronize: process.env.NODE_ENV !== 'production',
  type: 'postgres',
  username: process.env.DB_USERNAME || 'nestjsuser',
}));
