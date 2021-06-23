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
    var myHeaders = new Headers();
    myHeaders.append(
      "auth-token",
      localStorage.getItem("auth-token")
    );

    var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://45.77.12.16:4000/product/cart", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data)
      .then(data=>console.log(data))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
         <Header name="Sara"/>
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

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 cart_info">
              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image"></td>
                    <td className="description text-center">Tên Sách</td>
                    <td className="price text-center">Giá</td>
                    <td className="quantity text-center">Số Lượng</td>
                    <td className="total text-center">Tổng Tiền</td>
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
          </div>
        </section>
      </div>
    );
  }
}
export { Cart };
