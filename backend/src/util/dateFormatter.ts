import { parse } from 'date-fns';

const toFormat = (date: string): Date => parse(date, 'yyyy-MM-dd', Date.now());

export { toFormat };
