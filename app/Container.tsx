import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  id?: string;
  element?: 'div' | 'section';
  children: React.ReactNode;
};

const Container = ({ id, element: Element = 'div', children }: ContainerProps) => (
  <Element id={id} className={styles.default}>
    {children}
  </Element>
);

export default Container;
