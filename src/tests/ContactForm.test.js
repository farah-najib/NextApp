import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../components/ContactForm';

test('renders contact form with input fields and submit button', () => {
  render(<ContactForm />);


  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const messageTextarea = screen.getByLabelText('Message:');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageTextarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submitting the form', () => {
  render(<ContactForm />);


  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const messageTextarea = screen.getByLabelText('Message:');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(nameInput, 'John Doe');
  userEvent.type(emailInput, 'john@example.com');
  userEvent.type(messageTextarea, 'This is a test message');


  userEvent.click(submitButton);


});
