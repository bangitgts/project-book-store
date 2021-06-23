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
      .then((data) => console.log(data))
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
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
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/one.png" alt="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href>Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href>
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                        autoComplete="off"
                        size={2}
                      />
                      <a className="cart_quantity_down" href>
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href>
                      <i className="fa fa-times" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/two.png" alt="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href>Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href>
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                        autoComplete="off"
                        size={2}
                      />
                      <a className="cart_quantity_down" href>
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href>
                      <i className="fa fa-times" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/three.png" alt="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href>Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href>
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                        autoComplete="off"
                        size={2}
                      />
                      <a className="cart_quantity_down" href>
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href>
                      <i className="fa fa-times" />
                    </a>
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
