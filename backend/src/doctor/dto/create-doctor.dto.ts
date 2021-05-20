import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsEmail, IsInt } from 'class-validator';
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
  @IsInt()
  clinicId: number;
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
}
