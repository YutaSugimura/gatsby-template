import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/store';
import { asyncIncrement } from '../reducer/middleware';
import AsyncIncrementButton from '../components/asyncIncrementButton';

const Count: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();

  const asyncCountIncrement = () => {
    dispatch(asyncIncrement(counter));
  };

  return (
    <div>
      <p>count: {counter}</p>
      <AsyncIncrementButton onAsyncIncrement={asyncCountIncrement} />
    </div>
  );
};

export default Count;
