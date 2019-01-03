import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import { EditLink, Ul, Li } from '../components';

const Content = lazy(() => importMDX('./Home.doc.mdx'));
const components = {
  ul: Ul,
  li: Li
};

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Content components={components} />
      </Suspense>

      <EditLink fileLocation="pages/Home.doc.mdx" />
    </>
  )
}

export default Home;