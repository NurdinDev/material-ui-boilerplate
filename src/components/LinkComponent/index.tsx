import * as React from 'react';
import { Link } from 'react-router-dom';

export const LinkComponent = (props: any) => {
  const { href, to, ...rest } = props;
  return <Link to={href || to} {...rest} />;
};
