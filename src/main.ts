import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { nlpTraining } from './manage.constant';

async function bootstrap() {
  await nlpTraining();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
