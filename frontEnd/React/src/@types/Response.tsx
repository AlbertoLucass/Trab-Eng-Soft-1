import { Clinic } from './Clinic';
import { Patient } from './Patient';
import { Doctor } from './Doctor';

export interface Response {
  Clinic: Clinic;
  Doctor: Doctor;
  Patient: Patient;
  Date: string;
  happened: boolean;
}
