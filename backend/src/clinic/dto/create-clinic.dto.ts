import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateClinicDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  phone: string;
}
