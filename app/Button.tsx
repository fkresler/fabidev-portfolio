import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isFullWidth?: boolean;
  style?: 'text' | 'primary' | 'secondary' | 'muted';
};

const Button = ({ children, isFullWidth = false, style = 'primary', ...rest }: ButtonProps) => {
  const incomingClassName = rest.className;
  const styleClassName: string = styles[style] || styles.primary;

  const classNameArray = [styles.button, styleClassName]
    .concat(incomingClassName ? [incomingClassName] : [])
    .concat(isFullWidth ? [styles.fullWidth] : []);
  const classNames = classNameArray.join(' ');

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
