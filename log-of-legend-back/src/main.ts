import { NestFactory } from '@nestjs/core';
import { fstat } from 'fs';
import { AppModule } from './app.module';
import fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync('../../../private.pem'),
  cert: fs.readFileSync('../../../public.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });
  await app.listen(3000);
}
bootstrap();
