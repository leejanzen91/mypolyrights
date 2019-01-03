import React, { Component, lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';

import { Root } from './RightsList.styles';

const RightsListContent = lazy(() => importMDX('./RightsList.mdx'));

export class RightsList extends Component {
  public render(): JSX.Element {
    return (
      <Root>
        <Suspense fallback={<div>Loading...</div>}>
          <RightsListContent />
        </Suspense>
      </Root>
    )
  }
}