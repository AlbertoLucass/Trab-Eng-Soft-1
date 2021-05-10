import { Appointment } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { toFormat } from '../util';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FindOneAppointmentDto } from './dto/find-one-appointment.dto';
import { FilterAppointmentDto } from './dto/filter-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { addDays } from 'date-fns';
@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  getByDate(date: string) {
    const formattedDate = toFormat(date);
    return this.prisma.appointment.findMany({
      where: {
        Date: { gte: formattedDate, lt: addDays(formattedDate, 1) },
        AND: { happened: false },
      },
      select: {
        Clinic: {
          select: { name: true, phone: true },
        },
        Doctor: {
          select: {
            name: true,
            email: true,
            phone: true,
            crm: true,
          },
        },
        Patient: {
          select: {
            name: true,
          },
        },
        Date: true,
        happened: true,
      },
      orderBy: {
        Date: 'asc',
      },
    });
  }

  setHappened({ date, doctorId, patientId }: Required<FilterAppointmentDto>) {
    const formattedDate = toFormat(date);
    return this.prisma.appointment.update({
      data: { happened: true },
      where: {
        patientId_doctorId_Date: {
          Date: formattedDate,
          doctorId,
          patientId,
        },
      },
    });
  }

  create(createAppointmentDto: CreateAppointmentDto) {
    const { clinicId, date, doctorId, patientId } = createAppointmentDto;

    const formattedDate = toFormat(date);

    return this.prisma.appointment.create({
      data: {
        clinicId,
        Date: formattedDate,
        doctorId,
        patientId,
      },
    });
  }

  findAll(filterAppointmentDto: FilterAppointmentDto): Promise<Appointment[]> {
    const { date, doctorId, patientId } = filterAppointmentDto;
    return this.prisma.appointment.findMany({
      include: {
        Doctor: true,
        Clinic: true,
        Patient: true,
      },
      where: {
        OR: {
          Date: {
            equals: date,
          },
          doctorId: {
            contains: doctorId,
          },
          patientId: {
            contains: patientId,
          },
        },
      },
    });
  }

  findOne(findOneAppointmentDto: FindOneAppointmentDto) {
    const { date, doctorId, patientId } = findOneAppointmentDto;
    const formattedDate = toFormat(date);
    return this.prisma.appointment.findUnique({
      where: {
        patientId_doctorId_Date: {
          Date: formattedDate,
          doctorId,
          patientId,
        },
      },
    });
  }

  update(
    findOneAppointmentDto: FindOneAppointmentDto,
    updateAppointmentDto: UpdateAppointmentDto,
  ) {
    const { date, doctorId, patientId } = findOneAppointmentDto;
    const formattedDate = toFormat(date);
    return this.prisma.appointment.update({
      data: updateAppointmentDto,
      where: {
        patientId_doctorId_Date: {
          Date: formattedDate,
          doctorId,
          patientId,
        },
      },
    });
  }

  remove(findOneAppointmentDto: FindOneAppointmentDto) {
    const { date, doctorId, patientId } = findOneAppointmentDto;
    const formattedDate = toFormat(date);
    return this.prisma.appointment.delete({
      where: {
        patientId_doctorId_Date: {
          Date: formattedDate,
          doctorId,
          patientId,
        },
      },
    });
  }
}
