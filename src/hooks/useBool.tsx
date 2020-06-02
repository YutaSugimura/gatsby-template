import { useState } from 'react';

interface Result {
  bool: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

const useBool = (): Result => {
  const [bool, setBool] = useState(false);
  const setTrue = (): void => {
    setBool(true);
  };

  const setFalse = (): void => {
    setBool(false);
  };

  return { bool, setTrue, setFalse };
};
export default useBool;
