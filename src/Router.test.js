import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Router test', () => {
    test('Switch between Pages', () => {
        render(<App />);

        const aboutPage = screen.getAllByText(/ABOUT/i)[0];
        const programsPage = screen.getAllByText(/PROGRAMS/i)[0];

        userEvent.click(aboutPage);
        expect(screen.getByText(/SMH Description/i));
        userEvent.click(programsPage);
        expect(screen.getByText(/Addiciton Treatment Program For Drugs And Alcohol/i));
    });
});
