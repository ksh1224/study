import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const GET = 'GET' as const;
export const POST = 'POST' as const;
export const DELETE = 'DELETE' as const;
export const PUT = 'PUT' as const;

const methods = { GET, POST, DELETE, PUT };

export type MethodsType = typeof methods[keyof typeof methods];

interface Headers {
  Accept?: string;
  'Content-Type': string;
  'Access-Control-Allow-Origin': string;
  Authorization?: string;
}

interface ServerError {
  code: string;
  description: string;
}

export interface APIParam {
  method?: MethodsType;
  body?: ObjectType;
}

async function apiUtil(
  url: string,
  param?: APIParam,
): Promise<APIData | AxiosError | any> {
  try {
    const fullUrl = await `${process.env.REACT_APP_HOST?.replace(
      /\/$/,
      '',
    )}/${url.replace(/\s/g, '').replace(/^\//, '')}`;

    const headers: Headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const config: AxiosRequestConfig = {
      data: null,
      method: param?.method || 'GET',
      url: fullUrl,
      headers,
      validateStatus(status: number) {
        return status < 500;
      },
    };

    if (param?.body) {
      config.data = param.body;
    }
    if (process.env.REACT_APP_DEV) {
      console.log('config', config);
    }
    const response = await axios(config);
    const { data }: { data: APIData } = await response;
    if (response.status === 200) {
      return data;
    }

    const statusError = new Error();
    statusError.name = `statusError:${data.responseCode}`;
    statusError.message = data.message;
    throw statusError;
  } catch (error) {
    if (error && error.response) {
      const axiosError = error as AxiosError<ServerError>;
      console.log('axiosErrorresponse', axiosError.response);
      throw axiosError;
    }
    throw error;
  }
}

export default apiUtil;
