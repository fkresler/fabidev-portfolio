import React, { ComponentProps } from 'react';
import Link from 'next/link';
import styles from './Link.module.scss';

const BasicLink = ({ children, ...rest }: ComponentProps<typeof Link>) => {
  const classNameArray = [styles.link].concat(rest.className ? [rest.className] : []);
  const classNames = classNameArray.join(' ');
  return (
    <Link {...rest} className={classNames}>
      {children}
    </Link>
  );
};

export default BasicLink;
