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
import { AdministrationService } from './administration.service';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';

@ApiTags('Admin')
@Controller('administration')
export class AdministrationController {
  constructor(private readonly administrationService: AdministrationService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Creates a new admin' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic" })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  create(@Body() createAdministrationDto: CreateAdministrationDto) {
    return this.administrationService.create(createAdministrationDto);
  }

  //#TODO: Need to be logged in
  @Get()
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findAll() {
    return this.administrationService.findAll();
  }

  @Get(':id/:email')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findOne(@Param('id') id?: string, @Param('email') email?: string) {
    return this.administrationService.findOne(id, email);
  }

  //#TODO: need to be logged in
  @Patch(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  update(
    @Param('id') id: string,
    @Body() updateAdministrationDto: UpdateAdministrationDto,
  ) {
    return this.administrationService.update(id, updateAdministrationDto);
  }

  //#TODO: need to be logged in
  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  remove(@Param('id') id: string) {
    return this.administrationService.remove(id);
  }
}
