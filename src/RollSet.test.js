import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import RollSet from './RollSet';

test('renders the correct number of dice', () => {
    render(<RollSet numberOfRolls={2} numberOfDice={1} />);
    expect(screen.getAllByTitle('Dice Roll Result').length).toEqual(2)
});