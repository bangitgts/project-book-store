/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../Header";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartUser: [],
    };
  }
  componentDidMount() {
    var axios = require("axios");
    var qs = require("qs");
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
      .then((data) => data.cart)
      .then((data) => {
        this.setState({
          cartUser: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { cartUser } = this.state;

    const dataCartlist = cartUser.map((data) => {
      return (
        <tr>
          <td className="cart_product">
            <a href>
              <img src="" alt="" />
            </a>
          </td>
          <td className="cart_description">
            <h4>
              <a href>{data.tenSach}</a>
            </h4>
            <p>Tác giả: {data.tacGia}</p>
          </td>
          <td className="cart_price">
            <p>{parseInt(data.giaBia).toLocaleString()}</p>
          </td>
          <td className="cart_quantity">
            <button onClick={this.tang} className="button-decrease">
              +
            </button>
            <span className="button-span text-center">
              {/* {this.state.countProduct} */}
              {parseInt(data.amount)}
            </span>
            <button onClick={this.giam} className="button-decrease">
              -
            </button>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">
              {(parseInt(data.giaBia) * parseInt(data.amount)).toLocaleString()}
            </p>
          </td>
          <td className="cart_delete">
            <a className="cart_quantity_delete" href>
              <i className="fa fa-times" />
            </a>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Header name="abc" />
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
                  <td className="price">Giá</td>
                  <td className="quantity">Số Lượng</td>
                  <td className="total">Tổng Tiền</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {dataCartlist}
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="" alt="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    
                  </td>
                  <td className="cart_price">
                   
                  </td>
                  <td className="cart_total_price">
                  Tổng tiền
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">
                        1,0000,0000 
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
export { Cart };
