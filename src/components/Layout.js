// components/Layout.js
import React from 'react';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
       <Nav />
    <div className='container'>
      <Container style={{ maxWidth: '100%' }}>
        {children}
        <Footer />
      </Container>
    </div>
    </>
  );
};

export default Layout;
