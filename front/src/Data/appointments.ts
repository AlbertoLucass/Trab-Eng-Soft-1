interface Column {
  id: 'id' | 'patientId' | 'doctorId' | 'clinicId' | 'date';
  label: string;
  minWidth?: number;
  align: 'center';
  format?: (value: number) => string;
}

export const appointmentsColumns: Column[] = [
  {
    id: 'id',
    label: 'Id',
    minWidth: 218,
    align: 'center',
  },
  {
    id: 'patientId',
    label: 'Paciente',
    minWidth: 218,
    align: 'center',
  },
  {
    id: 'doctorId',
    label: 'Médico',
    align: 'center',
    minWidth: 218,
  },
  {
    id: 'date',
    label: 'Data',
    minWidth: 218,
    align: 'center',
  },
];

export interface Data {
  id: number;
  patientId: string;
  doctorId: string;
  clinicId: number;
  date: string;
}

export function createData(
  id: number,
  patientId: string,
  doctorId: string,
  clinicId: number,
  date: string,
): Data {
  return { id, patientId, doctorId, clinicId, date };
}

export const appointmentsRows = [
  createData(1, 'Alberto', 'Alberto', 1111, '25/02/2021'),
  createData(2, 'Gustavo', 'Gustavo', 2222, '25/02/2021'),
  createData(3, 'Danilo', 'Danilo', 3333, '25/02/2021'),
  createData(4, 'Pedro', 'Pedro', 4444, '25/02/2021'),
];
