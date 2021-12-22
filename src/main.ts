import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  hbs.registerHelper("formatDate", function(datetime) {
    const date = new Date(datetime);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  })

  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
