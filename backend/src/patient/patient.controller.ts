import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '.prisma/client';
import { JwtAuthGuard, RolesGuard } from '../auth/guards';
import { HttpExceptionFilter } from '../util/conflictFilter';

@ApiTags('Patient')
@UseFilters(HttpExceptionFilter)
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Successfully created a patient' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic" })
  @ApiBadRequestResponse({ description: 'Invalid Body' })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Need authenticated' })
  @ApiForbiddenResponse({ description: 'Need to be an admin or an Doctor' })
  @ApiOkResponse({ description: 'Returns all patients' })
  findAll() {
    return this.patientService.findAll();
  }

  @Get('/info')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Return one patient' })
  @ApiNotFoundResponse({ description: "Couldn't find one patient" })
  @ApiBadRequestResponse({
    description: 'You need to provide at least one query',
  })
  @ApiBearerAuth()
  @ApiQuery({ name: 'email', required: false })
  @ApiQuery({ name: 'cpf', required: false })
  @ApiQuery({ name: 'id', required: false })
  findOne(
    @Query('email') email: string,
    @Query('cpf') cpf: string,
    @Query('id') id: string,
  ) {
    return this.patientService.findOne({ email, cpf, id });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Updated a Patient' })
  @ApiBadRequestResponse({ description: 'Invalid Body' })
  @ApiUnauthorizedResponse({ description: 'Need authenticated' })
  update(@Param() id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Deleted Patient with success' })
  @ApiUnauthorizedResponse({ description: 'Need authenticated' })
  @ApiNotFoundResponse({ description: "Couldn't find this patient" })
  @ApiForbiddenResponse({ description: 'Need to be an admin' })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
