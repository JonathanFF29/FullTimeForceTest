import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GitService } from './git.service';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';


@Controller('git')
@UseInterceptors(JwtInterceptor)
export class GitController {
  constructor(private readonly gitService: GitService) {}

  @Get('commits')
  async getCommits() {
    const commits = await this.gitService.getCommits();
    return commits;
  }
}
