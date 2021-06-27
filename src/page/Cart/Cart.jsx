/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../Header";
import ReactLoading from "react-loading";
const axios = require("axios");
const qs = require("qs");

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartUser: [],
      tongSanphamthanhtoan: "",
      tongTienthanhtoan: "",
    };
  }
  componentDidMount() {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/cart",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
      data: data,
    };

    axios(config)
      .then((req) => req.data)
      .then((data) => data)
      .then((data) => {
        this.setState({
          cartUser: data.cart,
          tongSanphamthanhtoan: data.tongSanphamthanhtoan,
          tongTienthanhtoan: data.tongTienthanhtoan,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { cartUser } = this.state;
    const b = cartUser.filter((el) => el.isStatus === "1");
    const dataCartlist = cartUser.map((data, index) => {
      return (
        <tr className={data.isStatus === "0" ? "no-change" : "change-selected"}>
          <td className="cart_product">
            <a href>
              <img
                className="view-cart-product"
                style={{ width: "40%" }}
                src={data.urlImage}
                alt=""
              />
            </a>
          </td>
          <td className="cart_description">
            <h4>
              <a href>{data.tenSach}</a>
            </h4>
            <p>Tác giả: {data.tacGia}</p>
          </td>
          <td className="cart_chonmua">
            {data.isStatus === "0" ? (
              <input
                onClick={() => {
                  console.log(data._id);
                  var config = {
                    method: "put",
                    url: `http://45.77.12.16:4000/product/changepayment/${data._id}`,
                    headers: {
                      "auth-token": localStorage.getItem("auth-token"),
                    },
                  };

                  axios(config)
                    .then(function (response) {
                      console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

                  const temp = this.state.cartUser;
                  const removed = temp.splice(index, 1);
                  const newDatadd = {
                    amount: data.amount,
                    giaBia: data.giaBia,
                    isStatus: "1",
                    khoSach: data.khoSach,
                    loaisach: data.loaisach,
                    nxb: data.nxb,
                    phathanhthang: data.phathanhthang,
                    tacGia: data.tacGia,
                    tenSach: data.tenSach,
                    theLoai: "",
                    urlImage: data.urlImage,
                    _id: data._id,
                  };
                  temp.splice(index, 0, newDatadd);
                  this.setState({
                    cartUser: temp,
                  });
                }}
                type="checkbox"
                id="c1"
                name="cc"
              />
            ) : (
              <input
                onClick={() => {
                  var config = {
                    method: "put",
                    url: `http://45.77.12.16:4000/product/changepayment/${data._id}`,
                    headers: {
                      "auth-token": localStorage.getItem("auth-token"),
                    },
                  };

                  const temp = this.state.cartUser;
                  const removed = temp.splice(index, 1);
                  const newDatadd = {
                    amount: data.amount,
                    giaBia: data.giaBia,
                    isStatus: "0",
                    khoSach: data.khoSach,
                    loaisach: data.loaisach,
                    nxb: data.nxb,
                    phathanhthang: data.phathanhthang,
                    tacGia: data.tacGia,
                    tenSach: data.tenSach,
                    theLoai: "",
                    urlImage: data.urlImage,
                    _id: data._id,
                  };
                  temp.splice(index, 0, newDatadd);
                  this.setState({
                    cartUser: temp,
                  });
                  axios(config)
                    .then(function (response) {
                      console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
                type="checkbox"
                id="c1"
                name="cc"
                defaultChecked
              />
            )}
          </td>
          <td className="cart_price text-center">
            <p>{parseInt(data.giaBia).toLocaleString()} ₫</p>
          </td>
          <td className="cart_quantity">
            <button
              onClick={() => {
                let c = parseInt(data.amount);
                c = c + 1;
                const temp = this.state.cartUser;
                const removed = temp.splice(index, 1);
                const newDatadd = {
                  amount: c,
                  giaBia: data.giaBia,
                  isStatus: data.isStatus,
                  khoSach: data.khoSach,
                  loaisach: data.loaisach,
                  nxb: data.nxb,
                  phathanhthang: data.phathanhthang,
                  tacGia: data.tacGia,
                  tenSach: data.tenSach,
                  theLoai: "",
                  urlImage: data.urlImage,
                  _id: data._id,
                };
                temp.splice(index, 0, newDatadd);
                this.setState({
                  cartUser: temp,
                });

                var dataadd = qs.stringify({
                  amount: c,
                });
                var config = {
                  method: "put",
                  url: `http://45.77.12.16:4000/product/change/${data._id}`,
                  headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  data: dataadd,
                };

                axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
              className="button-decrease"
            >
              +
            </button>
            <span className="button-span text-center">
              {parseInt(data.amount)}
            </span>
            <button
              onClick={() => {
                let c = parseInt(data.amount);
                c = c - 1;
                const temp = this.state.cartUser;
                const removed = temp.splice(index, 1);
                const newDatadd = {
                  amount: c,
                  giaBia: data.giaBia,
                  isStatus: data.isStatus,
                  khoSach: data.khoSach,
                  loaisach: data.loaisach,
                  nxb: data.nxb,
                  phathanhthang: data.phathanhthang,
                  tacGia: data.tacGia,
                  tenSach: data.tenSach,
                  theLoai: "",
                  urlImage: data.urlImage,
                  _id: data._id,
                };
                temp.splice(index, 0, newDatadd);
                this.setState({
                  cartUser: temp,
                });

                var dataadd = qs.stringify({
                  amount: c,
                });
                var config = {
                  method: "put",
                  url: `http://45.77.12.16:4000/product/change/${data._id}`,
                  headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  data: dataadd,
                };

                axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
              className="button-decrease"
            >
              -
            </button>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">
              {(
                parseInt(data.giaBia) * parseInt(data.amount)
              ).toLocaleString() + " ₫"}
            </p>
          </td>
          <td className="cart_delete">
            <a
              onClick={() => {
                var config = {
                  method: "delete",
                  url: `http://45.77.12.16:4000/product/delete/${data._id}`,
                  headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                  },
                };

                axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                const temp = cartUser;
                const indexBook = cartUser.findIndex(
                  (el) => el._id === data._id
                );
                const removed = temp.splice(indexBook, 1);
                this.setState({
                  cartUser: temp,
                });
              }}
              value={data._id}
              className="cart_quantity_delete"
              href
            >
              <i className="fa fa-times" />
            </a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        {this.state.tongSanphamthanhtoan.length === 0 ? (
          <div className="loading-react">
            <div className="loading-center-react">
              <ReactLoading
                type="balls"
                color="#D95B35"
                height={"100px"}
                width={"100px"}
              />
            </div>
          </div>
        ) : (
          <div className="hieuung">
            <Header />
            <section id="cart_items">
              <div className="container">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="account">Account</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="checkout">Checkout</a>
                    </li>
                  </ol>
                </nav>

                <table className="col-xs-12 col-sm-12 col-md-12 col-lg-12 cart_info">
                  <thead>
                    <tr className="cart_menu">
                      <td className="image"></td>
                      <td className="description">Tên Sách</td>
                      <td className="chonmua text-center">Chọn</td>
                      <td className="price text-center">Giá</td>
                      <td className="quantity">Số Lượng</td>
                      <td className="total">Tổng Tiền</td>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.cartUser.length === 0
                      ? "Tạm thời bạn không có đơn hàng nào"
                      : ""}
                    {this.state.cartUser.length > 0 ? dataCartlist : ""}
                    {this.state.cartUser.length > 0 ? (
                      <tr>
                        <td className="cart_product">
                          <a href>
                            <img src="" alt="" />
                          </a>
                        </td>
                        <td className="cart_description"></td>
                        <td className="cart_price"></td>
                        <td className="cart_total_price">
                          <h4>
                            {" "}
                            Tổng thanh toán (
                            {b !== null
                              ? String(
                                  b.reduce(function (total, currentValue) {
                                    return (
                                      total + parseInt(currentValue.amount)
                                    );
                                  }, 0)
                                )
                              : "0"}{" "}
                            Sản phẩm)
                          </h4>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price"></p>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                            {b.length > 0
                              ? String(
                                  b
                                    .reduce(function (total, currentValue) {
                                      return (
                                        total +
                                        parseInt(currentValue.amount) *
                                          parseInt(currentValue.giaBia)
                                      );
                                    }, 0)
                                    .toLocaleString() + " ₫"
                                )
                              : "0 ₫"}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </tbody>
                </table>
                <div className="cart_total_price mr-center">
                  <h4 className="text-center">
                    Vui lòng chỉnh sửa thông tin nếu thông tin nhận hàng chưa
                    chính xác
                  </h4>
                  <div className="centreBox">
                    <a href="account">
                      <button className="cart">
                        <i className="fa fa-pencil" />
                        <h4>Chỉnh sửa thông tin</h4>
                      </button>
                    </a>
                    <a href="account">
                      <button className="cart">
                        <i className="fa fa-shopping-cart" />
                        <h4>Đặt hàng</h4>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <div></div>
            <footer id="footer">
              <p>2021 © Chuyên đề thực tế 2</p>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
export { Cart };
