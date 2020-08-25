import {AppModule} from '@modules/app.module';
import {INestApplication, Logger, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

const logger = new Logger(bootstrap.name);

const initDocumentation = (app: INestApplication, appPrefix: string, appHost: string): void => {
  const docOptions = new DocumentBuilder()
          .setTitle('API документация')
          .setVersion('1.0')
          .setBasePath(appPrefix)
          .addServer(appHost)
          .addBearerAuth()
          .build();
  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('api', app, document);
};

async function bootstrap(): Promise<void> {
  dotenv.config({path: process.env.CONFIG_NAME || '.env'});
  const appPort = process.env.BACKEND_PORT || 3000;
  const appPrefix = process.env.GLOBAL_CONTROLLER_PREFIX || 'v1';
  const appHost = process.env.SWAGGER_HOST ? process.env.SWAGGER_HOST : `localhost:${appPort}`;
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  app.setGlobalPrefix(appPrefix);
  initDocumentation(app, appPrefix, appHost);
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();
  await app.listen(appPort);
  logger.log(`Server was started at ${appHost}/${appPrefix}`);
}

bootstrap();
