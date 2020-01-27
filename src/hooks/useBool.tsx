import { useState } from 'react';

const useBool = () => {
  const [bool, setBool] = useState(false);
  const setTrue = () => {
    setBool(true);
  };

  const setFalse = () => {
    setBool(false);
  };

  return { bool, setTrue, setFalse };
};
export default useBool;
