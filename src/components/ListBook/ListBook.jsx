/* eslint-disable import/first */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
const axios = require("axios");
import { Link } from "react-router-dom";
class ListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product",
    };

    axios(config)
      .then((req) => req.data.data)
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }
  render() {
    const { data } = this.state;
    const dataList = data.map((data) => {
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo">
                <div className="product-background text-center">
                  <Link to="/login">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </Link>
                </div>
                <h4 className="pdl-5">{data.tenSach}</h4>
                <p className="pdl-5">Tác giả: {data.tacGia}</p>
                <h4 className="pdl-5">
                  Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                </h4>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="features_items">
        {/*features_items*/}
        {dataList}
      </div>
    );
  }
}
export { ListBook };
