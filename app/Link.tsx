import React, { ComponentProps } from 'react';
import Link from 'next/link';
import styles from './Link.module.scss';

const BasicLink = ({ children, ...rest }: ComponentProps<typeof Link>) => {
  return (
    <Link {...rest} className={styles.link}>
      {children}
    </Link>
  );
};

export default BasicLink;
