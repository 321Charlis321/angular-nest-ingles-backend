import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.enableCors();//Esto es importante para que no se tenga fallas a la hora entre la comunicacion del backend y fronted
  await app.listen(process.env.PORT || 3000);
}
bootstrap();


