import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/store';
import { increment } from '../reducer/actionReducer/counter';

const Count: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();
  const countIncrement = useCallback(
    () => {
      dispatch(increment());
    },
    [dispatch],
  )


  return (
    <div>
      <p>count: {counter}</p>
      <IncrementButton onIncrement={countIncrement} />
    </div>
  )
}

interface Props {
  onIncrement: () => void
}

const IncrementButton: React.FC<Props> = React.memo(({ onIncrement }) => (<button onClick={onIncrement}>increment</button>));

export default Count;