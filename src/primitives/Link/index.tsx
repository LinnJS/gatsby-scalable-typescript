import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

interface IProps {
  children: ReactNode;
  path: string;
}

const Link = (props: IProps): ReactNode => {
  const { path, children } = props;
  // if link is external use an anchor otherwise use GatsbyLink
  // eslint-disable-next-line prefer-regex-literals
  const urlRegex = new RegExp(
    'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)',
  );
  const isLinkExternal = urlRegex.test(path);
  // if homePath don't put leading slash
  const isHomePath = path === '/' ? '/' : `/${path}`;

  return isLinkExternal ? (
    <a {...props} target="_blank" rel="noopener noreferrer" href={path}>
      {children}
    </a>
  ) : (
    <GatsbyLink {...props} to={isHomePath}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};

export default Link;
