import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '.prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string, role: Role): Promise<any> {
    const user = await this.authService.validateAccount(
      username,
      password,
      role,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
