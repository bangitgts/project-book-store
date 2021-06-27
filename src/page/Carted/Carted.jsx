import React from "react";
import { Header } from "../Header";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
const axios = require("axios");

class Carted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: "",
      newPassword: "",
      renewPassword: "",
      isStatus: "",
      dataUser: [],
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
        return response.data.data;
      })
      .then((data) => {
        this.setState({
          dataUser: data,
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
    
    return (
      <div>
        <ReactNotification />
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
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 carted-selected">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 image-carted">
                    <img
                      src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/05/sach-tam-an-at-binh-an.jpg&w=226&h=366&q=100"
                      alt=""
                    />
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h4>Buồn Treo Góc Tủ Chuyện Cũ Phai Mờ</h4>
                    <p>Tác giả: ABCXYZ</p>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>19</h4>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>1290109</h4>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>25/5/200</h4>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 carted-selected">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 image-carted">
                    <img
                      src="http://skybooks.vn/wp-content/themes/skybooks/thumb.php?src=/wp-content/uploads/2021/05/sach-tam-an-at-binh-an.jpg&w=226&h=366&q=100"
                      alt=""
                    />
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h4>Buồn Treo Góc Tủ Chuyện Cũ Phai Mờ</h4>
                    <p>Tác giả: ABCXYZ</p>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>19</h4>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>1290109</h4>
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h4>25/5/200</h4>
                  </div>
                </div>

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
