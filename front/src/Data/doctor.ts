export interface Column {
  id:
    | 'id'
    | 'name'
    | 'crm'
    | 'cpf'
    | 'birthday'
    | 'rg'
    | 'clinicId'
    | 'email'
    | 'phone';
  label: string;
  minWidth?: number;
  align: 'center';
  format?: (value: number) => string;
}

export interface Data {
  id: number;
  name: string;
  crm: number;
  cpf: string;
  rg: string;
  phone: string;
  clinicId: number;
  email: string;
  birthday: string;
}

function createData(
  id: number,
  name: string,
  crm: number,
  cpf: string,
  birthday: string,
  rg: string,
  clinicId: number,
  email: string,
  phone: string,
): Data {
  return { id, name, crm, cpf, birthday, rg, clinicId, email, phone };
}

export const docColumns: Column[] = [
  {
    id: 'id',
    label: 'Id',
    minWidth: 118,
    align: 'center',
  },
  {
    id: 'name',
    label: 'Nome',
    minWidth: 118,
    align: 'center',
  },
  {
    id: 'crm',
    label: 'CRM',
    align: 'center',
    minWidth: 118,
  },
  {
    id: 'cpf',
    label: 'CPF',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'rg',
    label: 'RG',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'birthday',
    label: 'Nascimento',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'clinicId',
    label: 'N° Clínica',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'phone',
    label: 'Whatsapp',
    minWidth: 118,
    align: 'center',
  },
];

export const docRows = [
  createData(
    1,
    'Alberto',
    111111,
    '111111',
    '111111',
    '111111',
    1,
    'alberto@ufba.br',
    '111',
  ),
  createData(
    2,
    'Gustavo',
    222222,
    '222222',
    '222222',
    '222222',
    2,
    'gustavo@ufba.br',
    '111',
  ),
  createData(
    3,
    'Danilo',
    333333,
    '333333',
    '333333',
    '333333',
    3,
    'danilo@ufba.br',
    '111',
  ),
  createData(
    4,
    'Pedro',
    444444,
    '444444',
    '444444',
    '444444',
    4,
    'pedro@ufba.br',
    '111',
  ),
];
