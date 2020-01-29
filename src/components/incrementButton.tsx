import React from 'react';

interface Props {
  onIncrement: () => void;
}

const IncrementButton: React.FC<Props> = ({ onIncrement }) => {
  return <button onClick={onIncrement}>increment</button>;
};

export default React.memo(IncrementButton);
