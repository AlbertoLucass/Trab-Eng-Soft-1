/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdministrationService } from '../administration/administration.service';
import { DoctorService } from '../doctor/doctor.service';
import { PatientService } from '../patient/patient.service';
import { BcryptAdapter } from '../util/bcrypt.adapter';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdministrationService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string) {
    const admin = await this.adminService.auth(email);

    if (!admin) {
      return null;
    }

    const isAuth = await BcryptAdapter.isEqual(password, admin.password);

    if (!isAuth) {
      return null;
    }

    const { password: AdminPassword, ...result } = admin;

    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
