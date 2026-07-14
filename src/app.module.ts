import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        database: configService.get<string>('DB_DATABASE'),
        host: configService.get<string>('DB_HOST'),
        logging: true,
        password: configService.get<string>('DB_PASSWORD'),
        port: configService.get<number>('DB_PORT'),
        synchronize: true,
        type: 'postgres',
        username: configService.get<string>('DB_USERNAME'),
      }),
    }),
  ],
})
export class AppModule {}
