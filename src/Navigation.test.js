import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('Navigation text rendered', () => {
  render(<Navigation text="Onward" direction="right" target="../next" />);
  expect(screen.getByText('Onward')).toBeInTheDocument();
});