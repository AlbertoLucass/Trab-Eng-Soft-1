interface Column {
  id:
    | 'id'
    | 'name'
    | 'cpf'
    | 'clinicId'
    | 'road'
    | 'cep'
    | 'number'
    | 'city'
    | 'state'
    | 'email'
    | 'birthday'
    | 'phone';
  label: string;
  minWidth?: number;
  align: 'center';
  format?: (value: number) => string;
}

export const patientsColumns: Column[] = [
  {
    id: 'id',
    label: 'Id',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'name',
    label: 'Nome',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'cpf',
    label: 'CPF',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'road',
    label: 'Rua',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'cep',
    label: 'CEP',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'city',
    label: 'N° Casa',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'state',
    label: 'Estado',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'birthday',
    label: 'Nascimento',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'phone',
    label: 'Whatsapp',
    minWidth: 90,
    align: 'center',
  },
];

export interface Data {
  id: number;
  name: string;
  cpf: string;
  clinicId: number;
  road: string;
  cep: string;
  number: number;
  city: string;
  state: string;
  email: string;
  birthday: string;
  phone: string;
}

function createData(
  id: number,
  name: string,
  cpf: string,
  clinicId: number,
  road: string,
  cep: string,
  number: number,
  city: string,
  state: string,
  email: string,
  birthday: string,
  phone: string,
): Data {
  return {
    id,
    name,
    cpf,
    clinicId,
    road,
    cep,
    number,
    city,
    state,
    email,
    birthday,
    phone,
  };
}

export const patientRows = [
  createData(
    1,
    'Alberto',
    '1111',
    1,
    'UFBA',
    '1515',
    9,
    'Ibirataia',
    'BA',
    'alberto@ufba.br',
    '20/05/1900',
    '784512',
  ),
  createData(
    2,
    'Gustavo',
    '2222',
    1,
    'UFBA',
    '1515',
    9,
    'Camacari',
    'BA',
    'gustavo@ufba.br',
    '20/05/1900',
    '784512',
  ),
  createData(
    3,
    'Pedro',
    '3333',
    1,
    'UFBA',
    '1515',
    9,
    'Itabuna',
    'BA',
    'pedro@ufba.br',
    '20/05/1900',
    '784512',
  ),
  createData(
    4,
    'Danilo',
    '4444',
    1,
    'UFBA',
    '1515',
    9,
    'Salvador',
    'BA',
    'danilo@ufba.br',
    '20/05/1900',
    '784512',
  ),
];

export interface Doc {
  // nome, crm,cpf,telefone,numero da clinica, email
  id: number;
  name: string;
  crm: number;
  cpf: number;
  rg: string;
  telefone: string;
  clinicIda: string;
  email: string;
}
