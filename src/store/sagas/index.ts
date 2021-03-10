import {
  call,
  spawn,
  put,
  takeEvery,
  take,
  select,
  all,
  cancel,
  takeLatest,
  fork,
} from 'redux-saga/effects';

import { authActionTypes } from 'store/actions';

function* watchCommon() {
  // yield takeEvery(
  //   authActionTypes.LOGIN_REQUEST,
  //   ({ payload }: { type: string; payload: Param }) => authSaga(payload),
  // );
}

export default function* root(): Generator {
  yield spawn(watchCommon);
}
