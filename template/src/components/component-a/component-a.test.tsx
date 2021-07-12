import React from 'react';

import { render, screen } from '@testing-library/react';

import ComponentA from './component-a';

test('Shoud be in document', () => {
  const LABEL = 'test';

  render(<ComponentA label={LABEL} />);

  expect(screen.getByText(LABEL)).toBeInTheDocument();
});
