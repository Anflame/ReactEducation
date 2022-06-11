export const TestInput = ({ label }) => {
  return (
    <>
      <input type="text" value={label} data-testId="test-input" />
    </>
  );
};
