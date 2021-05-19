import axios, { AxiosResponse } from 'axios';
import { Response } from '../@types/Response';

const getAppointmentsByDate = (
  date: string,
): Promise<AxiosResponse<Response[]>> =>
  axios.get<Response[]>(`http://localhost:3001/appointment/date/${date}`);

export { getAppointmentsByDate };
