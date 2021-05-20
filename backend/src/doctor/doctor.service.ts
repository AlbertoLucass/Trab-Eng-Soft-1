import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { toFormat } from '../util';
import { Doctor } from '.prisma/client';
import { FindOneDoctorDto } from './dto/find-one-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const {
      clinicId,
      name,
      birthday,
      cpf,
      crm,
      email,
      phone,
      rg,
    } = createDoctorDto;

    const formattedBirthday = toFormat(birthday);

    return this.prisma.doctor.create({
      data: {
        clinicId,
        name,
        birthday: formattedBirthday,
        cpf,
        crm,
        email,
        phone,
        rg,
      },
    });
  }

  findAll(): Promise<Doctor[]> {
    return this.prisma.doctor.findMany();
  }

  findOne(findOneDoctorDto: FindOneDoctorDto) {
    return this.prisma.doctor.findUnique({ where: findOneDoctorDto });
  }

  async update(
    findOneDoctorDto: FindOneDoctorDto,
    updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.prisma.doctor.update({
      data: updateDoctorDto,
      where: findOneDoctorDto,
    });
  }

  remove(id: string) {
    return this.prisma.doctor.update({
      data: { active: false },
      where: { id },
    });
  }

  auth(email: string) {
    return this.prisma.adminstration.findUnique({
      where: { email },
    });
  }
}
