import React, { useCallback } from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment } from '../redux/actionReducer/counter';
import Layout from '../components/layout';

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

type DataProps = {
  site: {
    buildTime: string;
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const counter = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const countIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <Layout>
      <p>
        You're currently on the page "{path}" which was built on{' '}
        {data.site.buildTime}.
      </p>
      <button onClick={countIncrement}>increment</button>
      <p>count: {counter}</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
};

export default IndexPage;
