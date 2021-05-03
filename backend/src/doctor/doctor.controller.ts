import { Role } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { FindOneDoctorDto } from './dto/find-one-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Roles(Role.ADMIN)
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDoctorDto: FindOneDoctorDto) {
    return this.doctorService.findOne(findOneDoctorDto);
  }

  @Patch(':id')
  update(
    @Param() findOneDoctorDto: FindOneDoctorDto,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.doctorService.update(findOneDoctorDto, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorService.remove(id);
  }
}
