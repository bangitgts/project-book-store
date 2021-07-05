import React from "react";
import { Header } from "../Header";

const axios = require("axios");

class Carted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
      carted: [],
     
    };
  }

  componentDidMount() {
    const url = "http://45.77.12.16:4000/account";
    var config = {
      method: "get",
      url: url,
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          dataUser: data,
          carted: data.carted,
          image_preview: data.imagePerson,
          name: data.name,
          address: data.address,
          phoneNumber: data.phoneNumber,
          dateBirth: data.dateBirth,
          sex: String(data.sex),
          introduce: data.introduce,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  
    const dataList = this.state.carted.map((el) => {
      return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 carted-selected">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 image-carted">
            <img
              src={el.urlImage}
              alt=""
            />
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h4>{el.tenSach}</h4>
            <p>Tác giả: {el.tacGia}</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <p>{el.amount}</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <p>{parseInt(el.giaBia).toLocaleString()} đ</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <p>{el.datePayment.slice(0,10)}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row profile">
            <div className="col-md-3">
              <div className="profile-sidebar">
                {/* SIDEBAR USERPIC */}
                <div className="profile-userpic">
                  <img
                    src={this.state.image_preview}
                    className="img-responsive"
                    alt=""
                  />
                  <div className="email-profile ">
                    <i className="fa fa-envelope" />
                    <span> </span>
                    {this.state.dataUser.email}
                  </div>
                  <div className="name-profile ">
                    <i className="fa fa-user" />
                    <span> </span>
                    {this.state.dataUser.name}
                  </div>
                </div>
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li>
                      <a href="account">
                        <i className="glyphicon glyphicon-user" />
                        Tài Khoản của tôi{" "}
                      </a>
                    </li>
                    <li>
                      <a href="changepassword">
                        <i className="glyphicon glyphicon-pencil" />
                        Đổi mật khẩu{" "}
                      </a>
                    </li>
                    <li className="active">
                      <a href="#" target="_blank">
                        <i className="glyphicon glyphicon-ok " />
                        Đơn mua{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* END MENU */}
              </div>
            </div>
            <div className="info-background col-xs-9 col-sm-9 col-md-9 col-lg-8">
              <div id="wrapper">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 top-menu-carted">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">ẢNH</div>

                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    TÊN SÁCH, TÁC GIẢ
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    SỐ LƯỢNG
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    ĐƠN GIÁ
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    NGÀY MUA
                  </div>
                </div>

                {dataList}

                {/* /.main-content */}
              </div>
            </div>
          </div>
        </div>

        {/* thong bao ok */}

        <footer id="footer">
          <ul class="list-inline text-center">
            <li>2021 © Chuyên đề thực tế 2</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export { Carted };
