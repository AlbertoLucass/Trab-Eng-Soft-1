import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdministrationService } from '../administration/administration.service';
import { DoctorService } from '../doctor/doctor.service';
import { PatientService } from '../patient/patient.service';
import { Role } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientService: PatientService,
    private readonly doctorService: DoctorService,
    private readonly adminService: AdministrationService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAccount(email: string, password: string, role: Role) {
    if (role === Role.ADMIN) {
      const admin = await this.adminService.auth(email);

      if (!admin) {
        return null;
      }

      const isAuth = await compare(password, admin.password);

      if (!isAuth) {
        return null;
      }

      const { password: AdminPassword, ...result } = admin;

      return result;
    }

    if (role === Role.DOCTOR) {
      const doctor = await this.doctorService.auth(email);

      if (!doctor) {
        return null;
      }

      const isAuth = await compare(password, doctor.password);

      if (!isAuth) {
        return null;
      }

      const { password: doctorPassword, ...result } = doctor;

      return result;
    }

    if (role === Role.PATIENT) {
      const patient = await this.patientService.findOne({ email });

      if (!patient) {
        return null;
      }

      const isAuth = await compare(password, patient.password);

      if (!isAuth) {
        return null;
      }

      const { password: patientPassword, ...result } = patient;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
