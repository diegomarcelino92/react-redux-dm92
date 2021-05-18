import React, { useEffect } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';

import { RootState } from '@reducers/index';
import { Creators } from '@reducers/reducer-a';

import ComponentA from '@components/component-a';
import Loading from '@components/loading';

import { DEFAULT_AVATAR } from '@config/constants';

import { Container, Avatar } from './styles';

const mapState = ({ reducerA }: RootState) => ({
  components: reducerA.getIn(['components']),
  loading: reducerA.getIn(['loading']),
  name: reducerA.getIn(['data', 'name'], 'Dev') as string,
  image: reducerA.getIn(['data', 'avatar_url'], DEFAULT_AVATAR) as string,
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addComponent: Creators.addComponent,
      reducerARequest: Creators.reducerARequest,
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

export type ComponentBProps = ConnectedProps<typeof connector>;

const ComponentB: React.FC<ComponentBProps> = ({
  reducerARequest,
  addComponent,
  components,
  loading,
  image,
  name,
}) => {
  useEffect(() => {
    // CALL GITHUB API
    reducerARequest('parameterRandomId');
  }, []);

  return (
    <Container>
      <Loading loading={loading} />

      <Avatar src={image} alt={name} />

      <h1>{`Hello ${name}`}</h1>

      <p>
        This project is configured with React, Redux, Redux-saga, Immutable,
        Styled-components, Path mapping of TS and Duck Pattern. You can remove
        any of the above libs as needed. I recommend installing REDUX DEV TOOLS
        to see a flow of data and actions.
      </p>

      <button
        onClick={() => addComponent({ label: 'OTHER_COMPONENT' })}
        disabled={loading}
      >
        ADD NEW
      </button>

      <ul>
        {components.map((comp, index) => (
          <li key={index}>
            <ComponentA {...comp} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default connector(ComponentB);
