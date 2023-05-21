import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('login')
    async login(@Body() credentials: any) {
    const userId = await this.authService.login(credentials);
    const token = await this.authService.generateToken({ userId });
    return { token };
    }
}
