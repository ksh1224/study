import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

export interface AuthParam {
  id: string;
  password: string;
}

export const authActionAsync = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
)<AuthParam | boolean | void, any, AxiosError, void>();

export const authActionTypes = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
};
