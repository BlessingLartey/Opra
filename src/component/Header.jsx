import React from "react";
import logo from "../imghotel/logo.jpeg";

function Header() {
  return (
    <>
      {/* <!-- Header Section Begin --> */}
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li>
                    <i className="fa fa-phone"></i> (12) 345 67890
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> info.colorlib@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <a href="#" className="bk-btn">
                    Booking Now
                  </a>
                  <div className="language-option">
                    {/* <img src="img/flag.jpg" alt=""> */}
                    <span>
                      EN <i className="fa fa-angle-down"></i>
                    </span>
                    <div className="flag-dropdown">
                      <ul>
                        <li>
                          <a href="#">Zi</a>
                        </li>
                        <li>
                          <a href="#">Fr</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="./home" className="logo">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="active">
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="./gallery">Rooms</a>
                      </li>
                      <li>
                        <a href="./about-us">About Us</a>
                      </li>
                      <li>
                        <a href="./pages">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="./room-details">Room Details</a>
                          </li>
                          <li>
                            <a href="./blog-details">Blog Details</a>
                          </li>
                          <li>
                            <a href="#">Family Room</a>
                          </li>
                          <li>
                            <a href="#">Premium Room</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="./blog">News</a>
                      </li>
                      <li>
                        <a href="./contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    <i className="icon_search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;
