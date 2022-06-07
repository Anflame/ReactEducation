import { useState } from 'react';

export const TestButton = () => {
  const [count, setCount] = useState(0);
  const handleClick1 = () => {
    setCount(count + 1);
  };
  return (
    <>
      <input
        type="button"
        data-testid="custom-button"
        onClick={handleClick1}
        value={count}
        style={{ padding: '10px' }}
      />
    </>
  );
};
