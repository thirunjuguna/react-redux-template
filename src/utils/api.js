import axios from 'axios';

const baseOptions = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('id_token')}`,
  },
  responseType: 'json',
  crossdomain: true,
};

export const requestInterceptor = config => ({
  ...baseOptions,
  ...config,
  headers: { ...baseOptions.headers, ...config.headers },
});
export const handleRequestError = error => error.response.data;
export const responseInterceptor = res => res;

const api = axios.create();
api.interceptors.request.use(requestInterceptor, handleRequestError);

export default api;