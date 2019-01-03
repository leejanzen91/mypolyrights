import React from 'react';

import { Link, EditIcon } from './EditLink.styles';

export interface IEditLinkProps {
  /**
   * This should be the path the .mdx file relative to the 'src' folder.
   */
  fileLocation: string;
}

export const EditLink = (props: IEditLinkProps) => {
  const baseUrl = 'https://github.com/jordandrako/mypolyrights/edit/master/src/';
  const fullUrl = `${baseUrl}${props.fileLocation}`;

  return (
    <Link href={fullUrl} target="_blank" rel="noopener">
      <EditIcon icon={['fab', 'github']}/>
      Edit this page
    </Link>
  )
}
