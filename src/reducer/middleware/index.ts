import { AppThunk } from '../store';
import { nextCountAPI } from '../../api/fetch';
import { setCount } from '../actionReducer/counter';

export const asyncIncrement = (currentCount: number): AppThunk => (
  dispatch,
): void => {
  nextCountAPI(currentCount).then((nextCount) => {
    dispatch(setCount(nextCount));
  });
};
