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
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AdministrationService } from './administration.service';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';

@ApiTags('Admin')
@Controller('administration')
export class AdministrationController {
  constructor(private readonly administrationService: AdministrationService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  create(@Body() createAdministrationDto: CreateAdministrationDto) {
    return this.administrationService.create(createAdministrationDto);
  }

  @Get()
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findAll() {
    return this.administrationService.findAll();
  }

  @Get(':id:email')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  findOne(@Param('id') id?: string, @Param('email') email?: string) {
    return this.administrationService.findOne(id, email);
  }

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

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  remove(@Param('id') id: string) {
    return this.administrationService.remove(id);
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  signUp() {
    return this.administrationService.signUp();
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  login() {
    return this.administrationService.login();
  }
}
