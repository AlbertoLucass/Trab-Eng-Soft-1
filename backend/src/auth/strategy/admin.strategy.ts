import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Role } from '.prisma/client';

export interface Admin {
  id: string;
  clinicId: number;
  email: string;
  name: string;
  cpf: string;
  role: Role;
}

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string): Promise<Admin> {
    const admin = await this.authService.validateAdmin(username, password);

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
