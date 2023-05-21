import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthController } from './auth/auth.controller';
import { GitController } from './git/git.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  await app.listen(3000); // Puerto de la aplicación principal
}
bootstrap();