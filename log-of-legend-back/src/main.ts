import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require('fs');

const PORT = process.env.PORT || 443; 

const httpsOptions = {
  key: fs.readFileSync(__dirname + '/secrets/key.pem'),
  cert: fs.readFileSync(__dirname + '/secrets/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  await app.listen(PORT);
}
bootstrap();
