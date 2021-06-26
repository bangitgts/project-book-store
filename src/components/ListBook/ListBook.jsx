import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
const axios = require("axios");
class ListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loai1: [],
      loai2: [],
      loai3: [],
      loai4: [],
      loai5: [],
      loai6: [],
      loai7: [],
    };
  }
  loai2() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai2",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai2: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  loai3() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai3",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai3: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loai4() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai4",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai4: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loai5() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai5",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai5: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  loai6() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai6",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai6: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  loai7() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai7",
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai7: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/product/loai1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          loai1: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    this.loai2();
    this.loai3();
    this.loai4();
    this.loai5();
    this.loai6();
    this.loai7();
  }
  render() {
    const { loai1 } = this.state;
    const { loai2 } = this.state;
    const { loai3 } = this.state;
    const { loai4 } = this.state;
    const { loai5 } = this.state;
    const { loai6 } = this.state;
    const { loai7 } = this.state;
    const dataList1 = loai1.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? (
                      <p>Tác giả: {data.tacGia}</p>
                    ) : (
                      <p>Loại Sách: Skybooks</p>
                    )}
                  </p>

                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList2 = loai2.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>

                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList3 = loai3.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>

                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList4 = loai4.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>

                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList5 = loai5.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>

                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList6 = loai6.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>
                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataList7 = loai7.map((data) => {
      const url = `product/${data._id}`;
      return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 ">
          <a href={url}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo">
                  <div className="product-background text-center">
                    <img className="text-center" src={data.urlImage} alt="" />
                  </div>
                  <h4 className="pdl-5">{data.tenSach}</h4>
                  <p className="pdl-5">
                    {data.tacGia ? <p>Tác giả: {data.tacGia}</p> : ""}
                  </p>
                  <h4 className="pdl-5">
                    Giá bìa: {parseInt(data.giaBia).toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    const dataIs1 =
      loai1.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList1
      );
    const dataIs2 =
      loai2.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList2
      );
    const dataIs3 =
      loai3.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList3
      );
    const dataIs4 =
      loai4.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList4
      );
    const dataIs5 =
      loai5.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList5
      );
    const dataIs6 =
      loai6.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList6
      );
    const dataIs7 =
      loai7.length === 0 ? (
        <ReactLoading
          type="balls"
          color="#D95B35"
          height={"100px"}
          width={"100px"}
        />
      ) : (
        dataList7
      );
    return (
      <div className="category-tab shop-details-tab">
        {/*category-tab*/}
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#Skybooks" data-toggle="tab">
                Skybooks
              </a>
            </li>

            <li>
              <a href="#Skycomics" data-toggle="tab">
                Skycomics
              </a>
            </li>

            <li onClick={() => console.log("abc")}>
              <a href="#Skynovel" data-toggle="tab">
                Skynovel
              </a>
            </li>

            <li>
              <a href="#Skymommy" data-toggle="tab">
                Skymommy
              </a>
            </li>

            <li>
              <a href="#tusachsongkhac" data-toggle="tab">
                Tủ sách Sống Khác
              </a>
            </li>

            <li>
              <a href="#tusachchualanh" data-toggle="tab">
                Tủ Sách Chữa Lành
              </a>
            </li>

            <li>
              <a href="#tusachquyco" data-toggle="tab">
                Tủ Sách Qúy Cô
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="Skybooks">
            {dataIs1}
          </div>
          <div className="tab-pane" id="Skycomics">
            {dataIs2}
          </div>
          <div className="tab-pane" id="Skynovel">
            {dataIs3}
          </div>

          <div className="tab-pane" id="Skymommy">
            {dataIs4}
          </div>
          <div className="tab-pane" id="tusachsongkhac">
            {dataIs5}
          </div>
          <div className="tab-pane" id="tusachchualanh">
            {dataIs6}
          </div>
          <div className="tab-pane" id="tusachquyco">
            {dataIs7}
          </div>
        </div>
        
      </div>
      
    );
  }
}
export { ListBook };
