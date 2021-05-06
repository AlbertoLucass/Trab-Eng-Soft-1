import { Clinic } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

export interface PartialClinic {
  name: string;
  phone: string;
  id: string;
}
@Injectable()
export class ClinicService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    return this.prisma.clinic.create({ data: createClinicDto });
  }

  findAll(): Promise<PartialClinic[]> {
    return this.prisma.clinic.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
      },
    });
  }

  async findOne(id: string): Promise<Clinic> {
    const clinic = await this.prisma.clinic.findUnique({ where: { id } });
    if (!clinic) {
      throw new NotFoundException();
    }
    return clinic;
  }

  update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic> {
    return this.prisma.clinic.update({ data: updateClinicDto, where: { id } });
  }

  remove(id: string): Promise<Clinic> {
    return this.prisma.clinic.update({
      data: { active: false },
      where: { id },
    });
  }
  reactivate(id: string): Promise<Clinic> {
    return this.prisma.clinic.update({
      data: { active: true },
      where: { id },
    });
  }
}
