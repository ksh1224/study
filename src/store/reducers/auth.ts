import { AxiosError } from 'axios';
import { createReducer } from 'typesafe-actions';

export interface State {
  data: any;
  isFetching: boolean;
  error?: AxiosError;
}

const initialState = {
  data: undefined,
  isFetching: false,
  error: undefined,
};

export default createReducer<State, Actions>(initialState, {
  LOGIN_REQUEST: (state) => ({
    ...state,
    isFetching: true,
    error: undefined,
  }),
  LOGIN_SUCCESS: (state, action) => ({
    data: action.payload,
    isFetching: false,
    error: undefined,
  }),
  LOGIN_FAIL: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  }),
  LOGOUT: () => ({
    ...initialState,
  }),
});
