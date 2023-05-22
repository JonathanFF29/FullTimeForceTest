import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/utils/models/user.model';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: User) {
        const userId = await this.authService.login(user);
        const token = await this.authService.generateToken({ userId });
        return { token };
    }
}
