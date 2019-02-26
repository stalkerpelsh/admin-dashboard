import React, { Component } from "react";
import logo from "../../assets/static/images/logo.png";
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
          {/* ### $Topbar ### */}
          <div className="header navbar">
            <div className="header-container">
              <ul className="nav-left">
                <li>
                  <a id="sidebar-toggle" className="sidebar-toggle" href="/">
                    <i className="ti-menu" />
                  </a>
                </li>
                <li className="search-box">
                  <a className="search-toggle no-pdd-right" href="/">
                    <i className="search-icon ti-search pdd-right-10" />
                    <i className="search-icon-close ti-close pdd-right-10" />
                  </a>
                </li>
                <li className="search-input">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                  />
                </li>
              </ul>
              <ul className="nav-right">
                <li className="notifications dropdown">
                  <span className="counter bgc-red">3</span>
                  <a
                    href="/"
                    className="dropdown-toggle no-after"
                    data-toggle="dropdown"
                  >
                    <i className="ti-bell" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="pX-20 pY-15 bdB">
                      <i className="ti-bell pR-10" />
                      <span className="fsz-sm fw-600 c-grey-900">
                        Notifications
                      </span>
                    </li>
                    <li>
                      <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <span>
                                <span className="fw-500">John Doe</span>
                                <span className="c-grey-600">
                                  liked your{" "}
                                  <span className="text-dark">post</span>
                                </span>
                              </span>
                              <p className="m-0">
                                <small className="fsz-xs">5 mins ago</small>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <span>
                                <span className="fw-500">Moo Doe</span>
                                <span className="c-grey-600">
                                  liked your{" "}
                                  <span className="text-dark">cover image</span>
                                </span>
                              </span>
                              <p className="m-0">
                                <small className="fsz-xs">7 mins ago</small>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <span>
                                <span className="fw-500">Lee Doe</span>
                                <span className="c-grey-600">
                                  commented on your{" "}
                                  <span className="text-dark">video</span>
                                </span>
                              </span>
                              <p className="m-0">
                                <small className="fsz-xs">10 mins ago</small>
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="pX-20 pY-15 ta-c bdT">
                      <span>
                        <a href="/" className="c-grey-600 cH-blue fsz-sm td-n">
                          View All Notifications{" "}
                          <i className="ti-angle-right fsz-xs mL-10" />
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="notifications dropdown">
                  <span className="counter bgc-blue">3</span>
                  <a
                    href="/"
                    className="dropdown-toggle no-after"
                    data-toggle="dropdown"
                  >
                    <i className="ti-email" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="pX-20 pY-15 bdB">
                      <i className="ti-email pR-10" />
                      <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                    </li>
                    <li>
                      <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <div>
                                <div className="peers jc-sb fxw-nw mB-5">
                                  <div className="peer">
                                    <p className="fw-500 mB-0">John Doe</p>
                                  </div>
                                  <div className="peer">
                                    <small className="fsz-xs">5 mins ago</small>
                                  </div>
                                </div>
                                <span className="c-grey-600 fsz-sm">
                                  Want to create your own customized data
                                  generator for your app...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <div>
                                <div className="peers jc-sb fxw-nw mB-5">
                                  <div className="peer">
                                    <p className="fw-500 mB-0">Moo Doe</p>
                                  </div>
                                  <div className="peer">
                                    <small className="fsz-xs">
                                      15 mins ago
                                    </small>
                                  </div>
                                </div>
                                <span className="c-grey-600 fsz-sm">
                                  Want to create your own customized data
                                  generator for your app...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                          >
                            <div className="peer mR-15">
                              <img
                                className="w-3r bdrs-50p"
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="peer peer-greed">
                              <div>
                                <div className="peers jc-sb fxw-nw mB-5">
                                  <div className="peer">
                                    <p className="fw-500 mB-0">Lee Doe</p>
                                  </div>
                                  <div className="peer">
                                    <small className="fsz-xs">
                                      25 mins ago
                                    </small>
                                  </div>
                                </div>
                                <span className="c-grey-600 fsz-sm">
                                  Want to create your own customized data
                                  generator for your app...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="pX-20 pY-15 ta-c bdT">
                      <span>
                        <a
                          href="email.html"
                          className="c-grey-600 cH-blue fsz-sm td-n"
                        >
                          View All Email{" "}
                          <i className="fs-xs ti-angle-right mL-10" />
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle no-after peers fxw-nw ai-c lh-1"
                    data-toggle="dropdown"
                  >
                    <div className="peer mR-10">
                      <img
                        className="w-2r bdrs-50p"
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        alt=""
                      />
                    </div>
                    <div className="peer">
                      <span className="fsz-sm c-grey-900">John Doe</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu fsz-sm">
                    <li>
                      <a
                        href="/"
                        className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                      >
                        <i className="ti-settings mR-10" />
                        <span>Setting</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                      >
                        <i className="ti-user mR-10" />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="email.html"
                        className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                      >
                        <i className="ti-email mR-10" />
                        <span>Messages</span>
                      </a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a
                        href="/"
                        className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                      >
                        <i className="ti-power-off mR-10" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* ### $App Screen Content ### */}
          <main className="main-content bgc-grey-100">
            <div id="mainContent">
              <div className="container-fluid">
                <h4 className="c-grey-900 mT-10 mB-30">Data Tables</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">Bootstrap Data Table</h4>
                      <table
                        id="dataTable"
                        className="table table-striped table-bordered"
                        cellSpacing={0}
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                          </tr>
                          <tr>
                            <td>Sonya Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td>2008/12/13</td>
                            <td>$103,600</td>
                          </tr>
                          <tr>
                            <td>Paul Byrd</td>
                            <td>Chief Financial Officer (CFO)</td>
                            <td>New York</td>
                            <td>64</td>
                            <td>2010/06/09</td>
                            <td>$725,000</td>
                          </tr>
                          <tr>
                            <td>Gloria Little</td>
                            <td>Systems Administrator</td>
                            <td>New York</td>
                            <td>59</td>
                            <td>2009/04/10</td>
                            <td>$237,500</td>
                          </tr>
                          <tr>
                            <td>Bradley Greer</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>41</td>
                            <td>2012/10/13</td>
                            <td>$132,000</td>
                          </tr>
                          <tr>
                            <td>Hope Fuentes</td>
                            <td>Secretary</td>
                            <td>San Francisco</td>
                            <td>41</td>
                            <td>2010/02/12</td>
                            <td>$109,850</td>
                          </tr>
                          <tr>
                            <td>Vivian Harrell</td>
                            <td>Financial Controller</td>
                            <td>San Francisco</td>
                            <td>62</td>
                            <td>2009/02/14</td>
                            <td>$452,500</td>
                          </tr>
                          <tr>
                            <td>Timothy Mooney</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>37</td>
                            <td>2008/12/11</td>
                            <td>$136,200</td>
                          </tr>
                          <tr>
                            <td>Jackson Bradshaw</td>
                            <td>Director</td>
                            <td>New York</td>
                            <td>65</td>
                            <td>2008/09/26</td>
                            <td>$645,750</td>
                          </tr>
                          <tr>
                            <td>Olivia Liang</td>
                            <td>Support Engineer</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td>2011/02/03</td>
                            <td>$234,500</td>
                          </tr>
                          <tr>
                            <td>Bruno Nash</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>38</td>
                            <td>2011/05/03</td>
                            <td>$163,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
