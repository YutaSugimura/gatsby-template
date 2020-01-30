import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/store';
import { increment } from '../reducer/actionReducer/counter';
import IncrementButton from '../components/incrementButton';

const Count: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();
  const countIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <div>
      <p>count: {counter}</p>
      <IncrementButton onIncrement={countIncrement} />
      <Link to="/">Go to top page</Link>
    </div>
  );
};

export default Count;
