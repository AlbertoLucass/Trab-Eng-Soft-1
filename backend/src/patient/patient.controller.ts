import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { Role } from '.prisma/client';

@ApiTags('patient')
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

  @Roles(Role.ADMIN)
  @ApiUnauthorizedResponse({ description: 'Need to be an Admin' })
  @Get()
  @ApiOkResponse({ description: 'Returns all patients' })
  findAll() {
    return this.patientService.findAll();
  }

  //#TODO:Need to be logged
  @Get('/info')
  @ApiOkResponse({ description: 'Return one patient' })
  @ApiNotFoundResponse({ description: "Couldn't find one patient" })
  @ApiBadRequestResponse({
    description: 'You need to provide at least one query',
  })
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
  //#TODO: Need to be logged
  @Patch(':id')
  @ApiOkResponse({ description: 'Updated a Patient' })
  @ApiNotFoundResponse({ description: "Couldn't find this patient" })
  @ApiBadRequestResponse({ description: 'Invalid Body' })
  @ApiParam({ name: 'id', type: String })
  update(
    @Param('id')
    id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Patient with success' })
  @ApiNotFoundResponse({ description: "Couldn't find this patient" })
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
