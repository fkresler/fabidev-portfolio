import React from 'react';
import styles from './Typography.module.scss';

type TypographyProps = {
  element?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'inherit' | 'center' | 'justify' | 'left' | 'right';
  preventBottomGutter?: boolean;
  children: React.ReactNode;
};

const Typography = ({
  element: Element = 'p',
  align = 'inherit',
  preventBottomGutter = false,
  children,
}: TypographyProps) => {
  const classNameArray = [styles.typography, styles[align]].concat(preventBottomGutter ? styles.noMargin : []);
  const classNames = classNameArray.join(' ');
  return <Element className={classNames}>{children}</Element>;
};

export default Typography;
