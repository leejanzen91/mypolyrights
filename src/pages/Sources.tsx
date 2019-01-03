import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import { EditLink } from '../components';

const Content = lazy(() => importMDX('./Sources.doc.mdx'));

const Sources = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>

      <EditLink fileLocation="pages/Sources.doc.mdx" />
    </>
  )
}

export default Sources;
