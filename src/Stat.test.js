import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Stat from './Stat';

test('Stat value rendered', () => {
  render(<Stat value={2} />);
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('Stat buttons rendered', () => {
  render(<Stat value={2} showButtons={true} />);
  expect(screen.getByLabelText('Increment')).toBeInTheDocument();
});