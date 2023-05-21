import { Injectable } from '@nestjs/common';

@Injectable()
export class GitService {

  async getCommits(): Promise<any[]> {
    try {
      const commits = ['test'];
      return commits;
    } catch (error) {
      throw new Error('Error');
    }
  }
}
