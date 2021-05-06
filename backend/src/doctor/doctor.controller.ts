import { Role } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { FindOneDoctorDto } from './dto/find-one-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Creates a doctor' })
  @ApiNotFoundResponse({ description: "Couldn't find this clinic" })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findAll() {
    return this.doctorService.findAll();
  }

  //#TODO: need to be logged in
  @Roles(Role.ADMIN, Role.DOCTOR)
  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findOne(@Param() findOneDoctorDto: FindOneDoctorDto) {
    return this.doctorService.findOne(findOneDoctorDto);
  }

  //#TODO: need to be logged in
  @Patch(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  update(
    @Param() findOneDoctorDto: FindOneDoctorDto,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.doctorService.update(findOneDoctorDto, updateDoctorDto);
  }

  //#TODO: need to be an admin
  @Roles(Role.ADMIN)
  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  remove(@Param('id') id: string) {
    return this.doctorService.remove(id);
  }
}
