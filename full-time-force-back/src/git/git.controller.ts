import { Controller, Get } from '@nestjs/common';
import { GitService } from './git.service';


@Controller('git')
export class GitController {
  constructor(private readonly gitService: GitService) {}

  @Get('commits')
  async getCommits() {
    const commits = await this.gitService.getCommits();
    return commits;
  }
}
