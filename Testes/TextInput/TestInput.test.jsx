import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestInput } from './TestInput';
describe('TestInput', () => {
  test('rendered input', () => {
    render(<TestInput label="test" />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
  test('rendered myltiply input', () => {
    render(
      <>
        <TestInput label="test" />
        <TestInput label="moreTests" />
      </>
    );
    expect(screen.queryAllByTestId('test-input').length).toBe(2);
  });
});
