import React, { ReactNode } from 'react';

import Layout from 'src/global/Layout';

const NotFoundPage = (): ReactNode => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
