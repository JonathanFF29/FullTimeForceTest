import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async login(credentials: any): Promise<string> {
    try {
      const token = 'test';
      return token;
    } catch (error) {
      throw new Error('Error');
    }
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
