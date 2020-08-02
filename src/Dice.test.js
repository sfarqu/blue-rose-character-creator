import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Dice from './Dice';

test('renders blank dice button', () => {
  render(<Dice numberOfDice="1" />);
  expect(screen.getByRole('button')).not.toHaveAttribute('value');
});

test('renders dice button with roll sum after click', () => {
    render(<Dice numberOfDice="1" />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('value');
  });
  