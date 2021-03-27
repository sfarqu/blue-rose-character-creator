import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import {Attribute, AdjustableAttribute} from './Attribute';

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
  const { rerender } = render(<Attribute name="Swords" value={2} />);
  rerender(<Attribute name="Swords" value={4} />)
  expect(screen.getByText('4')).toBeInTheDocument();
})

test('Adjustable attribute includes buttons', () => {
  render(<AdjustableAttribute name="Swords" value={2} adjustable={true} />);
  expect(screen.getByText('+')).toBeInTheDocument();
})

test('Adjustable attribute with buttons can be incremented', () => {
  render(<AdjustableAttribute name="Swords" value={0} adjustable={true} />);
  expect(screen.getByText('+')).toBeInTheDocument();
  fireEvent.click(screen.getByText('+'), 1);
  expect(screen.getByText('1')).toBeInTheDocument();
})

test('Adjustable attribute with buttons cannot be decremented below minimum', () => {
  render(<AdjustableAttribute name="Swords" value={0} adjustable={true} min={0} />);
  expect(screen.getByText('-')).toBeInTheDocument();
  fireEvent.click(screen.getByText('-'), 1);
  expect(screen.getByText('0')).toBeInTheDocument();
})

test('Adjustable attribute with buttons cannot be decremented below minimum', () => {
  render(<AdjustableAttribute name="Swords" value={1} adjustable={true} max={1} />);
  expect(screen.getByText('+')).toBeInTheDocument();
  fireEvent.click(screen.getByText('+'), 1);
  expect(screen.getByText('1')).toBeInTheDocument();
})

test('Adjustable attribute does not update with props', () => {
  const { rerender } = render(<AdjustableAttribute name="Swords" value={2} adjustable={true} />);
  rerender(<AdjustableAttribute name="Swords" value={4} adjustable={true} />)
  expect(screen.getByText('2')).toBeInTheDocument();
})