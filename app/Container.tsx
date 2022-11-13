import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  id?: string;
  headline?: string;
  contentSize?: 'sm' | 'default';
  children: React.ReactNode;
};

const Container = ({ id, headline, children, contentSize = 'default' }: ContainerProps) => (
  <section id={id} className={styles.section}>
    {headline && <h2 className={styles.headline}>{headline}</h2>}
    <div className={styles[contentSize]}>{children}</div>
  </section>
);

export default Container;
