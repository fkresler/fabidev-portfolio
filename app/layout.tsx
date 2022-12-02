import React, { ReactNode } from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import styles from './layout.module.scss';
import Link from './Link';
import Navigation from './Navigation';
import Typography from './Typography';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const currentFullYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Link href="/">Fabian Kresler</Link>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <Typography>© 2022-{currentFullYear} Fabian Kresler</Typography>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
