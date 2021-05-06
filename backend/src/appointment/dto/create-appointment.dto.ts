import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDateString } from 'class-validator';
export class CreateAppointmentDto {
  @IsUUID()
  @ApiProperty()
  patientId: string;
  @IsUUID()
  @ApiProperty()
  doctorId: string;
  @IsUUID()
  @ApiProperty()
  clinicId: string;
  @IsDateString()
  @ApiProperty()
  date: string;
}
