import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsEmail } from 'class-validator';

export class CreateAdministrationDto {
  @ApiProperty()
  @IsInt()
  clinicId: number;
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
