import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
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
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/users">
            <a>Users List</a>
          </Link>
          <Link href="/api/users">
            <a>Users API</a>
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
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
