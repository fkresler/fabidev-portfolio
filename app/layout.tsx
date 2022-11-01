import React, { ReactNode } from 'react';
import '../styles/reset.css';
import LayoutComponent from '../components/Layout';

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>
          {children}
        </LayoutComponent>
      </body>
    </html>
  );
};

export default Layout;
