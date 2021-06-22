import React from "react";
import Counters from "../../components/Counters/counters";
import { Header } from "../Header";
var axios = require("axios");

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      countProduct: 1,
    };
    this.tang = this.tang.bind(this);
    this.giam = this.giam.bind(this);

  }
  tang() {
    const count = this.state.countProduct;
    if (count < 5) {
      this.setState({
        countProduct: count + 1,
      });
    }
  }
  giam() {
    const count = this.state.countProduct;
    if (count <= 5 && count > 1) {
      this.setState({
        countProduct: count - 1,
      });
    }
  }
  componentDidMount() {
    const url = "http://45.77.12.16:4000/product/show/";
    const id = this.props.match.params.id;
    const urlFull = url + id;

    var config = {
      method: "get",
      url: urlFull,
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          data: data,
        });
        console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  refresh = () => {
    window.location.reload();
  };
  render() {
    const maska = "jkaskask</br>askasklklas";
    const state5 = this.state.countProduct === 5 ? "Số lượng đặt tối ta là 5":"";
    const { data } = this.state;
    return (
      
      <div>
        
        {/*header*/}
        <Header />
        <section>
          <div className="container">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Products</a>
                </li>
                <li class="breadcrumb-item active">Phòng Kín Nhốt Cá</li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-sm-12 padding-right">
                <div className="product-details">
                  {/*product-details*/}
                  <div className="col-sm-5">
                    <div className="view-product">
                      <img src={data.urlImage} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="product-information">
                      <h2>{data.tenSach}</h2>
                      <img src="images/product-details/rating.png" alt="" />
                      <span>| 2460 Đánh giá</span>
                      <div className="gia-bia">
                        <h3>{data.giaBia} ₫</h3>
                      </div>
                      <p>Ngày xuất bản: 05-2021</p>
                      <p>Loại bìa: bìa mềm</p>
                      <p>Kích thước: 11 x 18 cm</p>
                      <p>Số trang: 152</p>
                      <span>Số Lượng Mua</span>
                      <div className="a">
                        <button onClick={this.tang} className="button-decrease">
                          +
                        </button>
                        <span className="button-span text-center">
                          {this.state.countProduct}
                        </span>
                        <button onClick={this.giam} className="button-decrease">
                          -
                        </button>
                        <span className="text-center ">{state5}</span>
                      </div>

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
                    <div className="tab-pane fade active in" id="details">
                      <p>{maska}</p>
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
                    <div className="tab-pane" id="reviews">
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
