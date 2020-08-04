import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Attribute from './Attribute';

test('Attribute name and value rendered', () => {
  render(<Attribute name="Swords" value={2} />);
  expect(screen.getByText('Swords')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('Non-adjustable attribute does not include buttons', () => {
  render(<Attribute name="Swords" value={2} />);
  expect(screen.queryByText('+')).not.toBeInTheDocument();
})

test('Non-adjustable attribute updates with props', () => {
  const { getByTestId, rerender } = render(<Attribute name="Swords" value={2} />);
  rerender(<Attribute name="Swords" value={4} />)
  expect(screen.getByText('4')).toBeInTheDocument();
})

test('Adjustable attribute includes buttons', () => {
  render(<Attribute name="Swords" value={2} adjustable={true} />);
  expect(screen.getByText('+')).toBeInTheDocument();
})

test('Adjustable attribute does not update with props', () => {
  const { getByTestId, rerender } = render(<Attribute name="Swords" value={2} adjustable={true} />);
  rerender(<Attribute name="Swords" value={4} adjustable={true} />)
  expect(screen.getByText('2')).toBeInTheDocument();
})