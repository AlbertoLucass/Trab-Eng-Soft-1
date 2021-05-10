import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsEmail } from 'class-validator';

export class CreateAdministrationDto {
  @ApiProperty()
  @IsUUID()
  clinicId: string;
  @IsString()
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsString()
  password: string;
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  cpf: string;
}
