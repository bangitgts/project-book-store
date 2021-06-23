/* eslint-disable import/first */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
const axios = require("axios");
import { Link } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';

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
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <Link to={url}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo">
                <div className="product-background text-center">                  
                    <img className="text-center" src={data.urlImage} alt="" />
                </div>
                <h4 className="pdl-5">{data.tenSach}</h4>
                <p className="pdl-5">Tác giả: {data.tacGia}</p>
                <h4 className="pdl-5">
                  Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                </h4>
              </div>
            </div>
          </div>
          </Link>
        </div>
      );
    });
    const dataIs = data.length === 0 ? <LinearProgress color="secondary" /> : dataList;
    return (
      <div className="features_items">
        {/*features_items*/}
        
        {dataIs}
      </div>
    );
  }
}
export { ListBook };
