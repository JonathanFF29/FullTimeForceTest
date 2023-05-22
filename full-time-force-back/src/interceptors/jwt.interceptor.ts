import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException, Inject, forwardRef } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
  constructor(@Inject(forwardRef(() => AuthService))
  private authService: AuthService,) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    console.log('toekn', token)
    try {
      const payload = this.authService.validateToken(token);
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    return next.handle();
  }
}