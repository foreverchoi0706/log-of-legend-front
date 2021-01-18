import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require('fs');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  await app.listen(3000);
}
bootstrap();
