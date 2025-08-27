import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const heroRef = useRef(null);

  return (
    <>
      
        <Header heroRef={heroRef}  />
      <main className="">
        {/* <AuthPopup /> */}
        <Outlet context={{ heroRef }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

