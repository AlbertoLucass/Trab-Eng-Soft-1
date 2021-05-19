import axios from 'axios';
import { backendRoute } from './const/consts';
import { History } from 'history';
export interface LoginBody {
  email: string;
  password: string;
}

export interface ResponseToken {
  accessToken: string;
}

const login = async (loginBody: LoginBody, history: History) => {
  const { data } = await axios.post<ResponseToken>(
    `${backendRoute}/auth/login`,
    loginBody,
  );
  localStorage.setItem('token', data.accessToken);
  history.push('/admin/start');
};

export { login };
