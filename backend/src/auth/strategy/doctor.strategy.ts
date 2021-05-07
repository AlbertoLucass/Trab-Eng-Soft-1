import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Role } from '.prisma/client';

export interface Doctor {
  id: string;
  clinicId: string;
  email: string;
  name: string;
  cpf: string;
  role: Role;
}

@Injectable()
export class DoctorStrategy extends PassportStrategy(Strategy, 'doctor') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string): Promise<Doctor> {
    const doctor = await this.authService.validateDoctor(username, password);

    if (!doctor) {
      throw new UnauthorizedException();
    }

    return doctor;
  }
}
