import { AnyAction } from 'redux';

import { put, takeLatest, call } from 'redux-saga/effects';

import { Types, Creators } from '@reducers/reducer-a';

function* reducerARequest({ ramdomId }: AnyAction) {
  try {
    console.log('### CALLED SAGA ### =>', ramdomId);

    const resp: Promise<Response> = yield call(
      fetch,
      `https://api.github.com/users/${process.env.MY_GIT_HUB}`
    );

    const data: Record<string, unknown> = yield resp.json();

    yield put(Creators.reducerASuccess(data));
  } catch (error) {
    yield put(Creators.reducerAFailed(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.REDUCER_A_REQUEST, reducerARequest);
}
