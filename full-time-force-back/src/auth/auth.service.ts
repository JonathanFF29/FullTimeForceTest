import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user.model';
import { users } from 'src/services/users.config';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async login(user: User): Promise<any> {
    const userFind = users.find(u => u.username === user.username && u.password === user.password);
    if (!userFind) {
      throw new UnauthorizedException();
    }
    return userFind;
  }

  async generateToken(payload: any): Promise<string> {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async validateToken(token: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
