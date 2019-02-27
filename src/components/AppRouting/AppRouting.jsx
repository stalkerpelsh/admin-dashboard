import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import TestRouting from '../TestRouting';
import './AppRouting.css';

const Home = () => <div>Home page</div>;
const TestPage = () => <div>Test Page</div>;

const AppRouting = () => (
  <Router>
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/test-page">Test page</NavLink>
          </li>
          <li>
            <NavLink to="/test-routing">Test routing component</NavLink>
          </li>
        </ul>
      </aside>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/test-page" component={TestPage} />
        <Route path="/test-routing" component={TestRouting} />
      </div>
    </>
  </Router>
);

export default AppRouting;
