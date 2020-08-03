import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Attribute from './Attribute';

test('Attribute name and value rendered', () => {
  render(<Attribute name="Swords" value={2} />);
  expect(screen.getByText('Swords')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});