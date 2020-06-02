import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment } from '../redux/actionReducer/counter';
import Layout from '../components/layout';

const SecondPage: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const countIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>count: {counter}</p>
      <button onClick={countIncrement}>increment</button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
