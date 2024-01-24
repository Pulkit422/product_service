import React from 'react';
import './Layout.css';
// import Videos from './Videos';

function Layout() {
  return (
    <>
      <div className='layout1'>
        <div className='logo-container'>
          <img src='/images/logo.png' alt='LOGO' />
        </div>
      </div>
      <div className="layout-container">
        <div className="left-container">
          <div className="heading">BIRTHDAY VIDEOS</div>
          <div className="boxes-container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
        </div>
        <div className="right-container">
          <div className="fifth-box"></div>
        </div>
      </div>
      <div className='content'>SAMPLE VIDEOS</div>
    </>
  );
}

export default Layout;
