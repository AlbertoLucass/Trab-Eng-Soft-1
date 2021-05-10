import { parseISO } from 'date-fns';
const toFormat = (date: string): Date => parseISO(date);

export { toFormat };
