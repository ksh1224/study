import * as actions from 'store/actions';
import rootReducer from 'store/reducers';
import { ActionType } from 'typesafe-actions';

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type Actions = ActionType<typeof actions>;
}
