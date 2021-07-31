import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.intercepter';

async function bootstrap() {
  const port = 3000;
  const logger = new Logger();

  // instantiating the NestJs app
  const app = await NestFactory.create(AppModule);

  // enabling CORS
  app.enableCors();

  // adding middleware
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  // listening to port
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
