import React from "react";
const axios = require("axios");
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        {/*header*/}
        <div className="header_top">
          {/*header_top*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" /> +123456789
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" /> info@xyz.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/header_top*/}
        <div className="header-middle">
          {/*header-middle*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="logo pull-left">
                  <a href="index.html">
                    <img
                      style={{ height: "30px" }}
                      src="https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?ssl=1"
                      alt=""
                    />
                  </a>
                </div>
                <div className="header-bottom">
                  {/*header-bottom*/}
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <a href="index.html" className="active">
                        Home
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Book
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <a href="shop.html">Products</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="login">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    {/* <li><a href="#"><i class="fa fa-user"></i> Account</a></li> */}
                    {/* <li><a href="#"><i class="fa fa-star"></i> Wishlist</a></li> */}
                    {/* <li>
                            <a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a>
                        </li> */}
                    {/* <li>
                            <a href="cart.html"><i class="fa fa-shopping-cart"></i> Cart</a>
                        </li> */}
                    <li>
                      <a href="login">
                        <i className="fa fa-lock" /> Login/Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export { Header };