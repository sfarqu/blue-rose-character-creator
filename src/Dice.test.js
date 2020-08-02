import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Dice from './Dice';

test('renders blank dice button', () => {
  render(<Dice numberOfDice={1} sum={10} />);
  expect(screen.getByTitle('Dice Roll Result')).toHaveAttribute('value');
});

test('onClick property modifies value', () => {
    render(<Dice numberOfDice={1} onClick={() => screen.getByRole('button').setAttribute("value", "test") } />);
    fireEvent.click(screen.getByTitle('Dice Roll Result'));
    expect(screen.getByTitle('Dice Roll Result')).toHaveAttribute('value');
  });
  