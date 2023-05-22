import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../util/models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    const url = `${environment.apiUrl}/auth/login`;
    const body = { username: user.username, password: user.password };

    return this.http.post(url, body);
  }
}
