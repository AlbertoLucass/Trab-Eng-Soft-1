import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsDateString } from 'class-validator';
export class CreateAppointmentDto {
  @IsUUID()
  @ApiProperty()
  patientId: string;
  @IsUUID()
  @ApiProperty()
  doctorId: string;
  @IsInt()
  @ApiProperty()
  clinicId: number;
  @IsDateString()
  @ApiProperty()
  date: string;
}
