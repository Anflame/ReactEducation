import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { TestButton } from './TestButton';
describe('Button', () => {
  beforeEach(() => {
    render(<TestButton />);
  });
  test('rendered button', () => {
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });
  test('check inline styles', () => {
    expect(screen.getByTestId('custom-button')).toHaveStyle({
      padding: '10px',
    });
  });
  test('change value on click', async () => {
    await userEvent.click(screen.getByTestId('custom-button'));
    expect(screen.getByTestId('custom-button').value).toBe('1');
  });
  test('change value on click', async () => {
    await userEvent.dblClick(screen.getByTestId('custom-button'));
    expect(screen.getByTestId('custom-button').value).toBe('2');
  });
});
