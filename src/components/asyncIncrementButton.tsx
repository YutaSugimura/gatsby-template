import React from 'react';

interface Props {
  onAsyncIncrement: () => void;
}

const AsyncIncrementButton: React.FC<Props> = ({ onAsyncIncrement }) => {
  return <button onClick={onAsyncIncrement}>async increment</button>;
};

export default React.memo(AsyncIncrementButton);
