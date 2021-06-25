import React from "react";
import { Header } from "../Header";

const axios = require("axios");

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: "",
      newPassword: "",
      renewPassword: "",
      isStatus: "",
      dataUser: [],
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangeText(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(event) {
    var qs = require("qs");
    var data = qs.stringify({
      password: this.state.passWord,
      newPassword: this.state.newPassword,
    });
    var config = {
      method: "put",
      url: "http://45.77.12.16:4000/account/changepassword",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        return response.data;
      })
      .then((data) =>
        this.setState({
          isStatus: true,
        })
      )
      .catch(function (error) {
        alert("Nhập sai mật khẩu cũ");
      });
    event.preventDefault();
  }
  render() {
    console.log(this.state.isStatus);
    const { dataUser } = this.state;

    const isStatushien = this.state.isStatus === true ? (
      <div>
        <div className="modal-header justify-content-center">
          <div className="icon-box">
            <i className="fa fa-check" />
          </div>
        </div>
        <div className="modal-body text-center">
          <h4>Chúc mừng bạn!</h4>
          <p
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Bạn đã đổi mật khẩu thành công
          </p>
        </div>
      </div>
    ) : (
      ""
    );

    if (
      (this.state.newPassword !== "") &
      (this.state.newPassword === this.state.renewPassword)
    ) {
      var checkPassword = (
        <i style={{ color: "green" }} class="fa fa-check">
          {" "}
        </i>
      );
    }
    const url = dataUser.imagePerson;
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
                      <a href="#">
                        <i className="glyphicon glyphicon-user" />
                        Tài Khoản của tôi{" "}
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <i className="glyphicon glyphicon-pencil" />
                        Đổi mật khẩu{" "}
                      </a>
                    </li>
                    <li>
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
            <div className="info-background col-md-9">
              <div id="wrapper">
                <div className="main-content">
                  <div className="main-section">
                    <div className="add-section">
                      <form onSubmit={this.onSubmit}>
                        <legend className="text-center">ĐỔI MẬT KHẨU</legend>
                        <div className="form-group">
                          <input
                            type="password"
                            name="passWord"
                            placeholder="Nhập mật khẩu cũ"
                            onChange={this.onChangeText}
                            require
                          />
                          <input
                            type="password"
                            name="newPassword"
                            placeholder="Nhập mật khẩu mới"
                            onChange={this.onChangeText}
                            require
                          />
                          {this.state.newPassword !== "" ? (
                            <i
                              style={{ color: "green" }}
                              className="fa fa-check"
                            >
                              {" "}
                            </i>
                          ) : (
                            ""
                          )}
                          <input
                            type="password"
                            name="renewPassword"
                            placeholder="Nhập lại mật khẩu mới"
                            onChange={this.onChangeText}
                            require
                          />
                          {checkPassword}
                          {}
                          <button
                            type="submit"
                            className="isdislaybutton btn btn-primary"
                            onClick={this.onSubmit}
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Submit
                          </button>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-confirm">
                              <div className="modal-content">
                                {isStatushien}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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

export { ChangePassword };
