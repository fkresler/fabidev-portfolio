import React, { ReactNode } from 'react';
import styles from './Drawer.module.scss';

type Props = {
  isOpen?: boolean;
  children?: ReactNode;
  onClose: () => void;
};

const Drawer = ({ isOpen = false, children, onClose }: Props) => {
  const drawerClassNameArray = [styles.drawer].concat(isOpen ? [styles.drawer_open] : []);
  const drawerClassNames = drawerClassNameArray.join(' ');

  const backdropClassNameArray = [styles.backdrop].concat(isOpen ? [styles.backdrop_open] : []);
  const backdropClassNames = backdropClassNameArray.join(' ');

  return (
    <div className={styles.wrapper}>
      <div className={backdropClassNames} onClick={onClose}></div>
      <div className={drawerClassNames}>{children}</div>
    </div>
  );
};

export default Drawer;
