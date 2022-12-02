'use client';

import React from 'react';
import styles from './Navigation.module.scss';
import Link from './Link';
import Button from './Button';
import Drawer from './Drawer';

type MenuItemsProps = {
  className?: string;
  onNavigate: () => void;
};

const MenuItems = ({ className, onNavigate }: MenuItemsProps) => {
  return (
    <>
      <Link className={className} href="/" onClick={onNavigate}>
        Home
      </Link>
      <Link className={className} href="/contact" onClick={onNavigate}>
        Contact
      </Link>
    </>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const navigate = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navigation}>
      <MenuItems className={styles.nav_large} onNavigate={navigate} />
      <Button className={styles.nav_small} onClick={() => setIsMenuOpen(true)}>
        Menu
      </Button>
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className={styles.popup_menu}>
          <MenuItems onNavigate={navigate} />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
