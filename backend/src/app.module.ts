import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ClinicModule } from './clinic/clinic.module';
import { AdministrationModule } from './administration/administration.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorModule } from './doctor/doctor.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    PatientModule,
    ClinicModule,
    AdministrationModule,
    AppointmentModule,
    DoctorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
