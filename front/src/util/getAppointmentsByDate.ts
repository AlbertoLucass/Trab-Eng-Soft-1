import axios, { AxiosResponse } from 'axios';
import { Response } from '../@types/Response';

const getAppointmentsByDate = (
  date: string,
): Promise<AxiosResponse<Response[]>> =>
  axios.get<Response[]>(`http://172.23.168.73:3001/appointment/date/${date}`);

export { getAppointmentsByDate };
