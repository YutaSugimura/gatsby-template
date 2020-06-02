import React from 'react';
import './layout.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};
export default Layout;
