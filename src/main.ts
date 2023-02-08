import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { GlobalExceptionsFilter } from './common/filter/global.exeptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Articles')
    .setDescription('The articles API description')
    .setVersion('1.0')
    .addTag('articles')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  app.useGlobalFilters(new GlobalExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
