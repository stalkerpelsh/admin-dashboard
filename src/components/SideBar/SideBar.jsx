import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/static/images/logo.png';
import './SideBar.scss';

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar-inner">
      <div className="sidebar-logo">
        <div className="peers ai-c fxw-nw">
          <div className="peer peer-greed">
            <NavLink exact className="sidebar-link td-n" to="/">
              <div className="peers ai-c fxw-nw">
                <div className="peer">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
                <div className="peer peer-greed">
                  <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="peer">
            <div className="mobile-toggle sidebar-toggle">
              <NavLink exact to="/" className="td-n">
                <i className="ti-arrow-circle-left" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ul className="sidebar-menu scrollable pos-r">
        <li className="nav-item dropdown">
          <NavLink exact className="sidebar-link" to="/">
            <span className="icon-holder">
              <i className="c-orange-500 ti-layout-list-thumb" />
            </span>
            <span className="title">Tables</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default SideBar;
