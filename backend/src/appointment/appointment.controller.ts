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
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtAuthGuard, RolesGuard } from '../auth/guards';
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
  @ApiOkResponse({ description: 'Returns all appointments or filters' })
  findAll(@Query() filterAppointmentDto: FilterAppointmentDto) {
    return this.appointmentService.findAll(filterAppointmentDto);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Find one by id' })
  @ApiNotFoundResponse({ description: "Couldn't find the appointment" })
  @ApiParam({ name: 'patientId', type: String })
  @ApiParam({ name: 'doctorId', type: String })
  @ApiParam({ name: 'date', type: String })
  findOne(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.findOne(findOneAppointmentDto);
  }
  @Patch(':id')
  @ApiOkResponse({ description: 'Updates a appointment' })
  @ApiNotFoundResponse({ description: "Couldn't find the appointment" })
  @ApiBadRequestResponse({ description: 'Invalid body' })
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
  @ApiOkResponse({ description: 'Deletes a appointment' })
  @ApiNotFoundResponse({ description: "Couldn't find the appointment" })
  @ApiUnauthorizedResponse({ description: 'You needed to be logged' })
  @ApiForbiddenResponse({ description: 'You need to be a doctor or a admin' })
  @Roles(Role.ADMIN, Role.DOCTOR)
  remove(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.remove(findOneAppointmentDto);
  }

  @Get('/date/:date')
  async getByDate(@Param('date') date: string) {
    return await this.appointmentService.getByDate(date);
  }

  @Post('/finished')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.DOCTOR)
  async finished(@Body() filterAppointmentDto: Required<FilterAppointmentDto>) {
    return await this.appointmentService.setHappened(filterAppointmentDto);
  }
}
