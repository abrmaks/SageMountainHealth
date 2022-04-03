import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import DialogContentForm from './DialogContentForm';
import Appointment from './index';
import userEvent from '@testing-library/user-event';
import { wait } from '@testing-library/user-event/dist/utils';

describe('Form Test', () => {
    test('Open modal', () => {
        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);
        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);
        const name = screen.getByLabelText('Name');
        expect(name).toBeInTheDocument();
        const email = screen.getByLabelText('Email');
        expect(email).toBeInTheDocument();
    });

    test('check text fields', async () => {
        // const handleSubmit = jest.fn();
        // render(<Index onSubmit={handleSubmit} />);
        // render(<Appointment />);
        // const openModButton = screen.getByText(/Make a appointment/i);
        //
        // expect(openModButton).toBeInTheDocument();
        // userEvent.click(openModButton);
        //
        // const inputName = screen.getByLabelText(/Name/i);
        //
        // await waitFor(() => {
        //     userEvent.type(screen.getByLabelText(/Name/i), 'John');
        // });
        // expect(inputName?.value).toBe('John');
    });

    test('input invalid email', async () => {
        // const handleSubmit = jest.fn();
        // render(<Index onSubmit={handleSubmit} />);

        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);

        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);

        const emailInput = await screen.getByLabelText('Email');

        userEvent.type(emailInput, 'email');

        await waitFor(() => {
            fireEvent.focusOut(emailInput);
        });

        await expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
    });

    test('input correctly email', async () => {
        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);

        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);

        const emailInput = await screen.getByLabelText('Email');

        userEvent.type(emailInput, 'email@gmail.com');

        await waitFor(() => {
            fireEvent.focusOut(emailInput);
        });

        await expect(screen.queryByText('Enter a valid email')).toBeNull();
    });

    test('input short name', async () => {
        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);

        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);

        const nameInput = await screen.getByLabelText('Name');

        // await waitFor(() => {
        //     // userEvent.type(nameInput, 'm');
        //     userEvent.paste(nameInput, 'mL');
        // });

        userEvent.type(nameInput, 'ml');

        await waitFor(() => {
            fireEvent.focusOut(nameInput);
        });

        await expect(screen.getByText(/Name should be of minimum 3 characters length/i)).toBeInTheDocument();
    });

    test('input correctly name', async () => {
        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);

        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);

        const nameInput = await screen.getByLabelText('Name');

        // await waitFor(() => {
        //     // userEvent.type(nameInput, 'm');
        //     userEvent.paste(nameInput, 'mL');
        // });

        userEvent.type(nameInput, 'Hello');

        await waitFor(() => {
            fireEvent.focusOut(nameInput);
        });

        await expect(screen.queryByText(/Name should be of minimum 3 characters length/i)).toBeNull();
    });

    test('input long name', async () => {
        render(<Appointment />);
        const openModButton = screen.getByText(/Make a appointment/i);

        expect(openModButton).toBeInTheDocument();
        userEvent.click(openModButton);

        const nameInput = await screen.getByLabelText('Name');

        userEvent.type(
            nameInput,
            'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
        );

        await waitFor(() => {
            fireEvent.focusOut(nameInput);
        });

        await expect(screen.getByText(/Too Long!/i)).toBeInTheDocument();
    });
});
