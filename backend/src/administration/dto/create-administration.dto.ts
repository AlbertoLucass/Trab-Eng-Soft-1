import { IsUUID, IsString, IsEmail } from 'class-validator';

export class CreateAdministrationDto {
  @IsUUID()
  clinicId: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  name: string;
  @IsString()
  cpf: string;
}
