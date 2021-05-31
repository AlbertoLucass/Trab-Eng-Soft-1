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
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard, RolesGuard } from '../auth/guards';
import { Roles } from '../auth/roles.decorator';
import { AdministrationService } from './administration.service';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdministrationController {
  constructor(private readonly administrationService: AdministrationService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Creates a new admin' })
  @ApiNotFoundResponse({ description: "Couldn't find clinic" })
  @ApiBadRequestResponse({ description: 'Invalid body' })
  create(@Body() createAdministrationDto: CreateAdministrationDto) {
    return this.administrationService.create(createAdministrationDto);
  }

  @Get()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin' })
  findAll() {
    return this.administrationService.findAll();
  }

  @Get(':email')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'returns a admin by email' })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin' })
  @ApiNotFoundResponse({ description: "Couldn't find this email" })
  @ApiParam({ name: 'email', type: String })
  findOne(@Param('email') email?: string) {
    return this.administrationService.findOne(email);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse({ description: 'Updates a admin by id' })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin' })
  @ApiNotFoundResponse({ description: "Couldn't find this id" })
  update(
    @Param('id') id: string,
    @Body() updateAdministrationDto: UpdateAdministrationDto,
  ) {
    return this.administrationService.update(id, updateAdministrationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deletes a admin by id' })
  @ApiUnauthorizedResponse({ description: 'You need to be logged in' })
  @ApiForbiddenResponse({ description: 'You need to be an admin' })
  @ApiNotFoundResponse({ description: "Couldn't find this id" })
  remove(@Param('id') id: string) {
    return this.administrationService.remove(id);
  }
}
