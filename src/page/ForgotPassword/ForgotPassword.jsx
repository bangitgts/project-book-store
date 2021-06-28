import React from "react";
import { Redirect } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ReCAPTCHA from "react-google-recaptcha";
import { store } from "react-notifications-component";

const axios = require("axios");
const qs = require("qs");

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      maxacthuc: "",
      password: "",
      repassword: "",
      redirect: false,
      redirect1: false,
      isVerified: false,
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  componentDidMount() {}
  handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.setState({
        isVerified: false,
      });
    }
  }

  verifyCallback(recaptchaToken) {
    if (recaptchaToken === null) {
      this.setState({
        isVerified: false,
      });
    } else {
      this.setState({
        isVerified: true,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isVerified === false) {
      store.addNotification({
        title: "Chưa xác nhận captcha!",
        message: "Vui lòng xác nhận captcha",
        type: "danger",
        insert: "top",
        container: "top-center",
        dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
        },
      });
    } else {
      var data = qs.stringify({
        email: this.state.email,
      });
      var config = {
        method: "post",
        url: "http://45.77.12.16:4000/account/forgotpassword",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          return response;
        })
        .then((data) => {
          this.setState({
            redirect: true,
          });
        })
        .catch(function (error) {
          console.log(error);
          store.addNotification({
            title: "Tài khoản này chưa đăng ký!",
            message: "Vui lòng nhập chính xác tài khoản",
            type: "danger",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 10000,
              onScreen: true,
              showIcon: true,
            },
          });
        });
    }
  }

  changePassword(e) {
    e.preventDefault();
    if (this.state.password !== this.state.repassword) {
      store.addNotification({
        title: "Mật khẩu bạn nhập không trùng khớp!",
        message: "Vui lòng nhập chính xác",
        type: "warning",
        insert: "top",
        container: "top-center",
        dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
        },
      });
    } else {
      const email = this.state.email;
      const url = "http://45.77.12.16:4000/account/newpassword/";
      const urlfull = url + email;
      const token = this.state.maxacthuc;
      const newPassword = this.state.repassword;
      var data = qs.stringify({
        token: token,
        newPassword: newPassword,
      });
      var config = {
        params: {
          email: email,
        },
        method: "put",
        url: urlfull,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          store.addNotification({
            title: "Mật khẩu của bạn đã được reset!",
            message: "Bạn sẽ được chuyển tới trang đăng nhập",
            type: "success",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 10000,
              onScreen: true,
              showIcon: true,
            },
          });
        })
        .then(data =>{this.setState({
          redirect1: true
        })})
        .catch(function (error) {
          store.addNotification({
            title: "Mã xác thực không hợp lên!",
            message: "Nếu chưa nhận được mời gửi lại email",
            type: "danger",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 10000,
              onScreen: true,
              showIcon: true,
            },
          });
        });
    }
  }

  render() {
    const {redirect1} = this.state;
    if(redirect1){
      window.setTimeout(function() {
        window.location.href = "login";
        }, 3000);
    }
    return (
      <div className="page-content page-login">
        <ReactNotification />
        <div className="page-inner">
          <div id="main-wrapper">
            <div className="row">
              <div className="col-md-4 center">
                <div className="panel panel-white" id="js-alerts">
                  <div className="panel-body">
                    <div className="login-box">
                      <h2 className="text-lg text-center m-t-xs">BOOK STORE</h2>
                      {this.state.redirect === false ? (
                        <form className="m-t-md" onSubmit={this.handleSubmit}>
                          <p className="text-center m-t-md">
                            Nhập email của bạn để lấy lại mật khẩu
                          </p>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Nhập email của bạn"
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <ReCAPTCHA
                            sitekey="6Ld55F0bAAAAAE2JZ9lo1razwPyfUiaMEvBvDbUV"
                            onChange={this.onChangeCaptcha}
                            render="explicit"
                            onloadCallback={this.onLoadRecaptcha}
                            onChange={this.verifyCallback}
                          />
                          ,
                          <button
                            type="submit"
                            className="btn btn-login btn-block"
                          >
                            Lấy lại mật khẩu
                          </button>
                          <a
                            href="login"
                            className="btn btn-default btn-block m-t-md"
                          >
                            Đăng nhập tài khoản
                          </a>
                        </form>
                      ) : (
                        <form className="m-t-md" onSubmit={this.handleSubmit}>
                          <span className="text-center m-t-md">
                            <p>Mã xác thực đã được gửi về mail của bạn</p>
                            <p> Nhập mã xác thực và mật khẩu mới</p>
                          </span>
                          <div className="form-group">
                            <div className="form-group">
                              <input
                                type="text"
                                name="maxacthuc"
                                className="form-control"
                                placeholder="Nhập mã xác thực"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Nhập mật khẩu mới"
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              name="repassword"
                              className="form-control"
                              placeholder="Nhập lại mật khẩu mới"
                              onChange={this.handleChange}
                              required
                            />
                          </div>

                          <button
                            type="submit"
                            onClick={this.changePassword}
                            className="btn btn-login btn-block"
                          >
                            Đổi mật khẩu
                          </button>
                          <a
                            href="login"
                            className="btn btn-default btn-block m-t-md"
                          >
                            Đăng nhập tài khoản
                          </a>
                        </form>
                      )}
                      <p className="text-center m-t-xs text-sm">2021 © Books</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row */}
          </div>
          {/* Main Wrapper */}
        </div>
        {/* Page Inner */}
      </div>
    );
  }
}

export { ForgotPassword };
