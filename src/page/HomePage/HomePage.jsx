import React from "react";

// eslint-disable-next-line import/first
import { Header } from "../Header";
import { Search } from "../Search";
const axios = require("axios");
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      auth: false,
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/account/",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        
        <Header/>
        {/*/header*/}
        <section>
          <div className="container">
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
              <Search/>
              <div className="col-sm-12 padding-right">
                <div className="features_items">
                  {/*features_items*/}
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                            <ul class="nav nav-pills nav-justified">
                                <li>
                                    <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                          >
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                          <ul class="nav nav-pills nav-justified">
                              <li>
                                  <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                        >
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                              </li>
                          </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                        <ul class="nav nav-pills nav-justified">
                            <li>
                                <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                      >
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                            </li>
                        </ul>
                    </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                          <li>
                              <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                    >
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                          </li>
                      </ul>
                  </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                    <ul class="nav nav-pills nav-justified">
                        <li>
                            <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                  >
                </li>
                <li>
                  <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                        </li>
                    </ul>
                </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                      <li>
                          <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
                >
              </li>
              <li>
                <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                      </li>
                  </ul>
              </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
                <ul class="nav nav-pills nav-justified">
                    <li>
                        <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
              >
            </li>
            <li>
              <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                    </li>
                </ul>
            </div> */}
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo ">
                          <div className="product-background text-center">
                            <img
                              className="text-center"
                              src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                              alt=""
                            />
                          </div>
                          <h4 className="pdl-5">Lúc nào cũng là quá muộn</h4>
                          <p className="pdl-5">Tác giả: abcxyz</p>
                          <h4 className="pdl-5">92,000 ₫</h4>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="choose">
              <ul class="nav nav-pills nav-justified">
                  <li>
                      <a href="#"><i class="fa fa-plus-square"></i>Thêm vào danh sách yêu thích</a
            >
          </li>
          <li>
            <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
                  </li>
              </ul>
          </div> */}
                    </div>
                  </div>
                </div>
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
