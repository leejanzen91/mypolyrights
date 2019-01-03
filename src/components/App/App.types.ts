import React from 'react';

export interface IPage {
  name: string;
  url: string;
  component: () => React.LazyExoticComponent<() => JSX.Element>;
}
