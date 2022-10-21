import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => {
  const fullTitle = `${title} | Fabian Kresler`;
  const currentFullYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <nav>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.nav_large}>
            <Link href="/works">
              <a>Works</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className={styles.nav_small}>
            Icon to open a layer
          </div>
          <div className={styles.nav_small_popup}>
            Layered navigation markup
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
        © 2022-{currentFullYear} Fabian Kresler
      </footer>
    </>
  );
};

export default Layout;
