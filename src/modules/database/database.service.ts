import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';
import {resolve} from 'path';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {

  constructor(private readonly configService: ConfigService) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DATABASE_HOST') || 'host',
      port: this.configService.get<number>('DATABASE_PORT') || 5432,
      username: this.configService.get('DATABASE_USER') || 'user',
      password: this.configService.get('DATABASE_PASSWORD') || 'password',
      database: this.configService.get('DATABASE') || 'database',
      entities: [`${resolve(__dirname, '..')}/**/*.entity{.ts,.js}`],
      // migrations: [`${resolve(__dirname)}/../entities/src/migrations/{*.ts,*.js}`],
      subscribers: [`${resolve(__dirname, '..')}/**/*.subscriber{.ts,.js}`],
      migrationsRun: true,
      logging: this.configService.get('NODE_ENV') === 'testing' ? false : 'all',
      cli: {migrationsDir: './migrations'},
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: this.configService.get('DATABASE_SYNC') || false,
    };
  }
}
