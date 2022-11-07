import React, { ReactNode } from 'react';
import Link from 'next/link';
import '../styles/reset.css';
import '../styles/variables.css';
import styles from './layout.module.scss';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const currentFullYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div className={styles.nav_large}>
              <Link href="/works">Works</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.nav_small}>Icon to open a layer</div>
            <div className={styles.nav_small_popup}>Layered navigation markup</div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>© 2022-{currentFullYear} Fabian Kresler</footer>
      </body>
    </html>
  );
};

export default Layout;
