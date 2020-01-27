import { useState, useCallback } from 'react';

type Result = {
  count: number;
  increment: () => void;
};

const useCounter = (initialValue: number): Result => {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
};
export default useCounter;
