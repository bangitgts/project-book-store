import React from "react";
import { Header } from "../Header";
import { Search } from "../Search";
import { ListBook } from "../../components/ListBook";
import { Redirect } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  render() {

    return (
      <div>
        <Header />
        {/*/header*/}
        <section>
          <div className="container">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Products</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1
                  className="text-center"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "bold",
                  }}
                >
                  Online book's store
                </h1>
              </div>
              {/* Thanh Search */}
              <Search />

              <div className="col-sm-12 padding-right">
                {/* ListBOOK */}
                <ListBook />
                <div className="recommended_items">
                  {/*recommended_items*/}
                  <h2 className="title text-center">Recommended Books</h2>
                  <div
                    id="recommended-item-carousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="left recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" />
                    </a>
                    <a
                      className="right recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  {/*/recommended_items*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <div className="footer-top">
          <div className="container">
            <div className="row">Footer ở đây</div>
          </div>
        </div>
      </div>
    );
  }
}
export { HomePage };
