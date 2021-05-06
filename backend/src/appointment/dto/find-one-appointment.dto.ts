import { IsUUID, IsDateString } from 'class-validator';
export class FindOneAppointmentDto {
  @IsUUID()
  patientId: string;
  @IsUUID()
  doctorId: string;
  @IsDateString()
  date: string;
}
