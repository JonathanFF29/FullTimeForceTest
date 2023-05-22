import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitService } from './git/git.service';
import { GitController } from './git/git.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, GitController],
  providers: [AppService, GitService],
})
export class AppModule {}
