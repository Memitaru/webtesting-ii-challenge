import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('Display component', () => {
    it('should render the display component properly', () => {
        const dummyData={
            balls: 1,
            strikes: 2
        }

        const { getByTestId } = render(<Display balls={dummyData.balls} strikes={dummyData.strikes} />)
        const strikes = getByTestId(/strikes/i)
        const balls = getByTestId(/balls/i)
        
        expect(balls).toHaveTextContent(/1/i)
        expect(strikes).toHaveTextContent(/2/i)
    })
})