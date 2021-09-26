import React, { useEffect, useState } from 'react';
import TopBar from './header/TopBar';
import PropTypes from 'prop-types';
import StaticHeader from './header/StaticHeader';
import Footer from './footer';

function HideOnScroll({children}) {

  const [isHide, setisHide] = useState(true)
  const [prev, setprev] = useState(0)
  const hideBar = () => {
    const pos = window.scrollY
    
    if (pos > prev) {
      !isHide && setisHide(true)
    } else {
      if (pos > 350) {
        isHide && setisHide(false);
      }else{
        !isHide && setisHide(true);
      }
    }

     setprev(window.scrollY);
  }

  useEffect(() => {
      window.addEventListener('scroll', hideBar);
      return () => {
          window.removeEventListener('scroll', hideBar);
      }
  }, [prev])

  return <div className={`hide-on-scroll ${isHide ? 'hide' : ''}`}>{children}</div>;
}

function Layout({children,className,style}) {
  return (
    <>
      <div id="back-to-top-anchor" />
      <HideOnScroll>
        <StaticHeader isSticky />
      </HideOnScroll>
        <TopBar />
        <StaticHeader />
        <main className={className} style={style}>
          {children}
        </main>
      <Footer />
    </>
  );
}
export default Layout