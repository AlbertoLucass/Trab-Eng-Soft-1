import { Patient } from '.prisma/client';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { toFormat } from '../util';
import { CreatePatientDto } from './dto/create-patient.dto';
import { FindPatientDto } from './dto/find-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const {
      email,
      phone,
      name,
      cpf,
      clinicId,
      address,
      birthday,
    } = createPatientDto;
    const formattedBirthDay = toFormat(birthday);
    const clinic = await this.prisma.clinic.findUnique({
      where: { id: clinicId },
    });

    if (!clinic) {
      throw new NotFoundException('Clinic Not Found');
    }

    return this.prisma.patient.create({
      data: {
        Address: {
          create: { ...address },
        },
        birthday: formattedBirthDay,
        cpf,
        email,
        name,
        phone,
        clinicId,
      },
    });
  }

  findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async findOne(findPatientDto: FindPatientDto): Promise<Patient> {
    if (
      !Object.values(findPatientDto).some((value) => typeof value === 'string')
    ) {
      throw new BadRequestException('You need to provide at least a query');
    }
    const patient = await this.prisma.patient.findUnique({
      where: findPatientDto,
    });
    if (!patient) {
      throw new NotFoundException();
    }
    return patient;
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    return this.prisma.patient.update({
      data: updatePatientDto,
      where: { id: id },
    });
  }

  remove(id: string): Promise<Patient> {
    return this.prisma.patient.delete({
      where: { id },
      include: { Address: true, Appointment: true },
    });
  }
}
