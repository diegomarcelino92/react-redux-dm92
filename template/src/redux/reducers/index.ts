import { combineReducers } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

import reducerA, { ReducerAState } from './reducer-a';

export interface RootState {
  reducerA: ImmutableObject<ReducerAState>;
}

const rootReducer = combineReducers({
  reducerA,
});

export default rootReducer;
