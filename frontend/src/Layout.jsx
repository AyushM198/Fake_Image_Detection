import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


const Layout = () => {
  const heroRef = useRef(null);

  return (
    <>
      
      <Header heroRef={heroRef} />
      <main className="mt-[90px]">
        <Outlet context={{ heroRef }} />
      </main>
    </>
  );
};

export default Layout;
