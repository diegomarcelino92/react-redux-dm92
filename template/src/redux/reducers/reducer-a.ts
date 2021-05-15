import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

import { AnyAction } from 'redux';

export interface ReducerAState {
  loading: boolean;
  data: Record<string, unknown>;
  error: Record<string, unknown>;
  components: ComponentAProps[];
}

export type ReducerACreators = {
  addComponent(param: ComponentAProps): AnyAction;

  reducerARequest(ramdomId: string): AnyAction;
  reducerASuccess(data: Record<string, unknown>): AnyAction;
  reducerAFailed(erro: Record<string, unknown>): AnyAction;
};

export type ReducerATypes = {
  ADD_COMPONENT: string;

  REDUCER_A_REQUEST: string;
  REDUCER_A_SUCCESS: string;
  REDUCER_A_FAILED: string;
};

export const { Types, Creators } = createActions<
  ReducerATypes,
  ReducerACreators
>({
  addComponent: ['param'],

  reducerARequest: ['ramdomId'],
  reducerASuccess: ['data'],
  reducerAFailed: ['error'],
});

const INITIAL_STATE = immutable<ReducerAState>({
  loading: false,
  components: [{ label: 'INITIAL_COMPONENT' }],
  data: {},
  error: {},
});

const addComponent = (state = INITIAL_STATE, { param }: AnyAction) =>
  state.merge({ components: state.getIn(['components']).concat(param) });

const reducerARequest = (state = INITIAL_STATE) =>
  state.merge({ loading: true });

const reducerASuccess = (state = INITIAL_STATE, { data }: AnyAction) =>
  state.merge({ data, loading: false });

const reducerAFailed = (state = INITIAL_STATE, { error }: AnyAction) =>
  state.merge({ error, loading: false });

export default createReducer(INITIAL_STATE, {
  [Types.ADD_COMPONENT]: addComponent,

  [Types.REDUCER_A_REQUEST]: reducerARequest,
  [Types.REDUCER_A_SUCCESS]: reducerASuccess,
  [Types.REDUCER_A_FAILED]: reducerAFailed,
});
