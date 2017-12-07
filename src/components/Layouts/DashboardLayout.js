/*jshint esversion: 6 */
import React from 'react';
import NavBar from '../NavBar';
import LeftMenu from '../LeftMenu';
import AuthRoute from '../AuthRoute';

const DashboardLayout =({children, ...rest}) => {
  return (
     <div className="page page-dashboard">
        <div id="wrap">
          <div id="left-menu-container">
            <div id="left-menu-wrap">
              <div id="overlay">
                <LeftMenu/>
              </div>
            </div>
          </div>
          <div className="test">
            <div id="hero">
              <div id="hero-overlay">
                <NavBar route={children} />
              </div>
            </div>
            <div id="project-one-container">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

export default DashboardLayout;
