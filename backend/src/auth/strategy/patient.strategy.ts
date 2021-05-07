import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Role } from '.prisma/client';

export interface Patient {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  createdAt: Date;
  birthday: Date;
  updatedAt: Date;
  clinicId: string | null;
  role: Role;
}

export interface PatientPayload {
  userId: string;
  email: string;
  role: Role;
}

@Injectable()
export class PatientStrategy extends PassportStrategy(Strategy, 'patient') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string): Promise<Patient> {
    const patient = await this.authService.validatePatient(username, password);

    if (!patient) {
      throw new UnauthorizedException();
    }

    return patient;
  }
}
