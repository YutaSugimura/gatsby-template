import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);
export default NotFoundPage;
