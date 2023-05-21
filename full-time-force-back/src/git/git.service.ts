import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class GitService {
  private  apiUrl = process.env.API_URL;
  private  owner = process.env.GITHUB_OWNER;
  private repo = process.env.GITHUB_REPO;

  async getCommits(): Promise<any[]> {
    try {
      const url = `${this.apiUrl}/repos/${this.owner}/${this.repo}/commits`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error');
    }
  }
}
