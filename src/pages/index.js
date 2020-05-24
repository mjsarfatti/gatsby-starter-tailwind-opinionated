import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import Image from 'src/components/Image';
import SEO from 'src/components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="mb-6 max-w-xs">
      <Image />
    </div>
    <Link className="inline-block mb-6" to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
