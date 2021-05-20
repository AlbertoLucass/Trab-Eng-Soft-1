import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@ApiTags('Clinic')
@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created successfully' })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Returns all clinics' })
  findAll() {
    return this.clinicService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Return the clinic that has the id' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic with the id" })
  @ApiBadRequestResponse({ description: "Didn't pass the id" })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clinicService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Patch with success' })
  @ApiNotFoundResponse({ description: "Didn't find the clinic with the id" })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClinicDto: UpdateClinicDto,
  ) {
    return this.clinicService.update(id, updateClinicDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted clinic with success' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic" })
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.clinicService.remove(id);
  }

  @Post('/reactivate/:id')
  @ApiOkResponse({ description: 'Reactivated clinic with success' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic" })
  reactivate(@Param('id', ParseIntPipe) id: number) {
    return this.clinicService.reactivate(id);
  }
}
