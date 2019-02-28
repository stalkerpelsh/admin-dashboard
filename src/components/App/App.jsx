import React, { Component } from "react";
import Header from "../Header";
import logo from "../../assets/static/images/logo.png";
import DataTable from "../DataTable";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-inner">
            {/* ### $Sidebar Header ### */}
            <div className="sidebar-logo">
              <div className="peers ai-c fxw-nw">
                <div className="peer peer-greed">
                  <a className="sidebar-link td-n" href="index.html">
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
                  </a>
                </div>
                <div className="peer">
                  <div className="mobile-toggle sidebar-toggle">
                    <a href="/" className="td-n">
                      <i className="ti-arrow-circle-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ### $Sidebar Menu ### */}
            <ul className="sidebar-menu scrollable pos-r">
              <li className="nav-item dropdown">
                <a className="sidebar-link" href="/">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-layout-list-thumb" />
                  </span>
                  <span className="title">Tables</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-container">
          <Header />
          <DataTable />
        </div>
      </div>
    );
  }
}

export default App;
