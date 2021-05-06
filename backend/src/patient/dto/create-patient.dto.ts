import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsDateString } from 'class-validator';
class Address {
  @ApiProperty()
  @IsString()
  road: string;
  @ApiProperty()
  @IsString()
  cep: string;
  @ApiProperty()
  @IsString()
  state: string;
  @ApiProperty()
  @IsString()
  number: number;
}

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  email: string;
  @ApiProperty({ type: Address })
  address: Address;
  @ApiProperty()
  @IsString()
  cpf: string;
  @ApiProperty()
  @IsString()
  phone: string;
  @ApiProperty()
  @IsString()
  password: string;
  @ApiProperty()
  @IsDateString()
  birthday: string;
  @ApiProperty()
  @IsUUID()
  clinicId: string;
}
