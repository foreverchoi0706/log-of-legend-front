import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require("fs");

const httpsOptions = {
  key: fs.readFileSync('$HOME/private.pem'),
  cert: fs.readFileSync('$HOME/cert.pem'),
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
