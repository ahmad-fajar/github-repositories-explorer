import axios, {
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

import { GitHubError } from '@/types';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
});

export const githubFetch = <Resp = any>(url: string, config: AxiosRequestConfig = {}) => {
  const {
    method = 'GET',
    ...restConfig
  } = config;

  return axiosInstance<Resp>({ url, method, ...restConfig })
    .then(res => res.data)
    .catch((err: AxiosError<GitHubError>) => {
      const errMessage = err.response?.data.message || 'Something went wrong';
      console.log('errMessage', errMessage);
      throw errMessage;
    });
};

export default axiosInstance;
