import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  id?: string;
  contentSize?: 'sm' | 'default';
  element?: 'div' | 'section';
  children: React.ReactNode;
};

const Container = ({ id, contentSize = 'default', element: Element = 'div', children }: ContainerProps) => (
  <Element id={id} className={styles.container}>
    <div className={styles[contentSize]}>{children}</div>
  </Element>
);

export default Container;
