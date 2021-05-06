import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from '../auth/roles.decorator';
import { PrismaValidationError } from '../util/PrismaFilter';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FilterAppointmentDto } from './dto/filter-appointment.dto';
import { FindOneAppointmentDto } from './dto/find-one-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@UseFilters(PrismaValidationError)
@ApiTags('Appointments')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Creates a appointment' })
  @ApiNotFoundResponse({ description: "Couldn't find one of the ids" })
  @ApiBadRequestResponse()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findAll(@Query() filterAppointmentDto: FilterAppointmentDto) {
    return this.appointmentService.findAll(filterAppointmentDto);
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiParam({ name: 'patientId', type: String })
  @ApiParam({ name: 'doctorId', type: String })
  @ApiParam({ name: 'date', type: String })
  findOne(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.findOne(findOneAppointmentDto);
  }
  @Patch(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  update(
    @Param() findOneAppointmentDto: FindOneAppointmentDto,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(
      findOneAppointmentDto,
      updateAppointmentDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @Roles(Role.ADMIN, Role.DOCTOR)
  remove(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.remove(findOneAppointmentDto);
  }
}
