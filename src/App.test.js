import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./form/Form";

test('correct inputs, submit', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const dateInput = screen.getByTestId("date");
  fireEvent.change(dateInput, { target: { value: "2023-12-22" } });
  expect(dateInput.value).toBe("2023-12-22");

  const timeInput = screen.getByTestId("time");
  fireEvent.change(timeInput, { target: { value: "22:40" } });
  expect(timeInput.value).toBe("22:40");

  const dinnersInput = screen.getByTestId("dinners");
  fireEvent.change(dinnersInput, { target: { value: "4" } });
  expect(dinnersInput.value).toBe("4");

  const emailInput = screen.getByTestId("email");
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  expect(emailInput.value).toBe("test@example.com");

  const phoneInput = screen.getByTestId("phone");
  fireEvent.change(phoneInput, { target: { value: "8819991" } });
  expect(phoneInput.value).toBe("8819991");

  const nameInput = screen.getByTestId("name");
  fireEvent.change(nameInput, { target: { value: "John" } });
  expect(nameInput.value).toBe("John");

  const lastNameInput = screen.getByTestId("lastName");
  fireEvent.change(lastNameInput, { target: { value: "Abc" } });
  expect(lastNameInput.value).toBe("Abc");

  const submitButton = screen.getByTestId("submit-btn");
  handleSubmit();
  fireEvent.click(submitButton);
  

  expect(handleSubmit).toHaveBeenCalled();
});

test('incorrect inputs, attempt to submit', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const submitButton = screen.getByTestId("submit-btn");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
});

