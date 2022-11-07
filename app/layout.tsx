import React, { ReactNode } from 'react';
import '../styles/reset.css';
import RootLayout from './RootLayout';

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
};

export default Layout;
