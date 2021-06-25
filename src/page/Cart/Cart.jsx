/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../Header";
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
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(e) {
    console.log(e);
  }

  giam() {
    console.log("b");
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
          tongTienthanhtoan: data.tongTienthanhtoan

        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { cartUser } = this.state;

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
            <p>{parseInt(data.giaBia).toLocaleString()} đ</p>
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
              {(parseInt(data.giaBia) * parseInt(data.amount)).toLocaleString()}
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
        <Header />
        <section id="cart_items">
          <div className="container">
            <div className="breadcrumbs">
              <ol className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Shopping Cart</li>
              </ol>
            </div>

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
                {this.state.cartUser.length > 0
                  ? dataCartlist
                  : "Ban chua co hang nao"}
                {this.state.cartUser.length > 0 ? (
                  <tr>
                    <td className="cart_product">
                      <a href>
                        <img src="" alt="" />
                      </a>
                    </td>
                    <td className="cart_description"></td>
                    <td className="cart_price"></td>
                    <td className="cart_total_price">Tổng thanh toán ({this.state.tongSanphamthanhtoan} Sản Phẩm)</td>
                    <td className="cart_total">
                      <p className="cart_total_price"></p>
                    </td>
                    <td className="cart_total">
                      <p className="cart_total_price">1,0000,0000</p>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
export { Cart };
