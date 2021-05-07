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
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard, RolesGuard } from '../auth/guards';
import { Roles } from '../auth/roles.decorator';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
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
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Returns info of all doctors' })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin' })
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Return doctor info' })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin or an doctor' })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  findOne(@Param(':id') id: string) {
    return this.doctorService.findOne({ id });
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Updates doctor info' })
  @ApiNotFoundResponse({ description: "Couldn't find this doctor" })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin or an doctor' })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update({ id }, updateDoctorDto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @ApiOkResponse({ description: 'Deletes a doctor' })
  @ApiNotFoundResponse({ description: "Couldn't find this doctor" })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin or an doctor' })
  remove(@Param('id') id: string) {
    return this.doctorService.remove(id);
  }
}
