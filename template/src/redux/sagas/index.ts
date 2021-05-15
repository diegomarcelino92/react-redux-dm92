import { all, fork } from 'redux-saga/effects';

import reducerASagas from './reducer-a-sagas';

function* rootSagas() {
  yield all([fork(reducerASagas)]);
}

export default rootSagas;
