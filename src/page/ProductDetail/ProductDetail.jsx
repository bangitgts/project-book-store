import React from "react";
import { Header } from "../Header"
class ProductDetail extends React.Component {
  render() {
    return (
      <div>
        {/*header*/}
        <Header/>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 padding-right">
                <div className="product-details">
                  {/*product-details*/}
                  <div className="col-sm-5">
                    <div className="view-product">
                      <img
                        src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/06/t%E1%BA%A3i-xu%E1%BB%91ng.jpg&w=226&h=366&q=100"
                        alt=""
                      />
                    </div>
                    <div className="text-center">
                      <iframe
                        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=87&height=28&appId"
                        width={87}
                        height={28}
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder={0}
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="product-information">
                      <h2>LÚC NÀO CŨNG LÀ QUÁ MUỘN ( TÁI BẢN )</h2>
                      <img src="images/product-details/rating.png" alt="" />
                      <span>| 2460 Đánh giá</span>
                      <div className="gia-bia">
                        <h3>92,000 ₫</h3>
                      </div>
                      <p>Ngày xuất bản: 05-2021</p>
                      <p>Loại bìa: bìa mềm</p>
                      <p>Kích thước: 11 x 18 cm</p>
                      <p>Số trang: 152</p>
                      <span>Số Lượng</span>
                      <span>
                        <button
                          style={{ height: "33px" }}
                          type="button"
                          className="btn btn-default"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="btn btn-default"
                          defaultValue={1}
                        />
                        <button
                          style={{ height: "33px" }}
                          type="button"
                          className="btn btn-default"
                        >
                          +
                        </button>
                      </span>
                      <div>
                        <button className="cart">
                          <i className="fa fa-shopping-cart" /> Thêm vào giỏ
                          hàng
                        </button>
                      </div>
                      <a href>
                        <img
                          src="images/product-details/share.png"
                          className="share img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    {/*/product-information*/}
                  </div>
                </div>
                {/*/product-details*/}
                <div className="category-tab shop-details-tab">
                  {/*category-tab*/}
                  <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#details" data-toggle="tab">
                          SƠ LƯỢC VỀ TÁC PHẨM
                        </a>
                      </li>
                      <li>
                        <a href="#companyprofile" data-toggle="tab">
                          Company Profile
                        </a>
                      </li>
                      <li>
                        <a href="#tag" data-toggle="tab">
                          Tag
                        </a>
                      </li>
                      <li>
                        <a href="#reviews" data-toggle="tab">
                          Reviews (5)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade" id="details">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="companyprofile">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tag">
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/gallery4.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade active in" id="reviews">
                      <div className="col-sm-12">
                        <ul>
                          <li>
                            <a href>
                              <i className="fa fa-user" />
                              EUGEN
                            </a>
                          </li>
                          <li>
                            <a href>
                              <i className="fa fa-clock-o" />
                              12:41 PM
                            </a>
                          </li>
                          <li>
                            <a href>
                              <i className="fa fa-calendar-o" />
                              31 DEC 2014
                            </a>
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <p>
                          <b>Write Your Review</b>
                        </p>
                        <form action="#">
                          <span>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email Address" />
                          </span>
                          <textarea name defaultValue={""} />
                          <b>Rating: </b>{" "}
                          <img src="images/product-details/rating.png" alt="" />
                          <button
                            type="button"
                            className="btn btn-default pull-right"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/category-tab*/}
                <div className="recommended_items">
                  {/*recommended_items*/}
                  <h2 className="title text-center">recommended items</h2>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                                <button
                                  type="button"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </button>
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
                </div>
                {/*/recommended_items*/}
              </div>
            </div>
          </div>
        </section>
        <footer id="footer"></footer>
      </div>
    );
  }
}

export { ProductDetail };
