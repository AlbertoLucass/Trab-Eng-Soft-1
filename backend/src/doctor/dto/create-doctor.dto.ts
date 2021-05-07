import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDateString,
  IsEmail,
  IsInt,
} from 'class-validator';
export class CreateDoctorDto {
  @IsString()
  @ApiProperty()
  name: string;
  @ApiProperty()
  @IsInt()
  @ApiProperty()
  crm: number;
  @ApiProperty()
  @IsString()
  cpf: string;
  @ApiProperty()
  @IsString()
  rg: string;
  @ApiProperty()
  @IsString()
  @ApiProperty()
  phone: string;
  @ApiProperty()
  @IsDateString()
  birthday: string;
  @ApiProperty()
  @IsUUID()
  clinicId: string;
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  password: string;
}
