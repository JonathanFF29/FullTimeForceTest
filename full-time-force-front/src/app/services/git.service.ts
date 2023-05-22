import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private baseUrl = `${environment.apiUrl}/git`;
  constructor(private http: HttpClient) { }

  getCommits() {
    return this.http.get(`${this.baseUrl}/commits`);
  }
}
