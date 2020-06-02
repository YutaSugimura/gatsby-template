import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SimpleEmotion from '../components/emotionComponents/simple';
import WithButton from '../components/emotionComponents/withEmotion';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleEmotion />
    <WithButton>This is a hotpink button</WithButton>
  </Layout>
);

export default IndexPage;
