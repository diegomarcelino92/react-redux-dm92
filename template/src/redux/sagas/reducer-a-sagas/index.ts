import { all, fork } from 'redux-saga/effects';

import reducerARequest from './reducer-a-request';

function* reducerASagas() {
  yield all([fork(reducerARequest)]);
}

export default reducerASagas;
