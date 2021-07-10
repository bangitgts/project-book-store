import React from "react";
import { Route, Redirect } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ReCAPTCHA from "react-google-recaptcha";
import { store } from "react-notifications-component";

const axios = require("axios");
const qs = require("qs");

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      repassword: "",
      isVerified: false,
      redirect: false,
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
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
    if (
      this.state.isVerified &&
      this.state.password === this.state.repassword
    ) {
      var data = qs.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });
      var config = {
        method: "post",
        url: "http://itcode.vn:4000/account/register",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            store.addNotification({
              title: "Chúc mừng bạn đã đăng ký thành công",
              message: "Bạn sẽ được chuyển ngay đến trang login",
              type: "success",
              insert: "top",
              container: "top-center",
              dismiss: {
                duration: 10000,
                onScreen: true,
                showIcon: true,
              },
            });
          } else if (response.status === 400) {
            store.addNotification({
              title: "Email này đã được đăng ký",
              message: "Xin vui lòng chọn email khác",
              type: "warning",
              insert: "top",
              container: "top-center",
              dismiss: {
                duration: 10000,
                onScreen: true,
                showIcon: true,
              },
            });
          }
        })
        .then((data) =>
          this.setState({
            redirect: true,
          })
        )
        .catch(function (error) {
          store.addNotification({
            title: "Email này đã được đăng ký",
            message: "Xin vui lòng chọn email khác",
            type: "warning",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 10000,
              onScreen: true,
              showIcon: true,
            },
          });
        });
    } else if (this.state.password !== this.state.repassword) {
      store.addNotification({
        title: "Mật khẩu nhập không trùng khớp!!!",
        message: "Vui lòng nhập lại mật khẩu",
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
    }
  }

  render() {

    const {redirect} = this.state;
    if(redirect){
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
                      <p className="text-center m-t-md">
                        Đăng ký tài khoản ngay
                      </p>
                      <form className="m-t-md" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Họ và tên"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
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
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control password"
                            placeholder="Nhập mật khẩu"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="repassword"
                            className="form-control password"
                            placeholder="Nhập lại mật khẩu"
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
                          Đăng ký
                        </button>
                        <a
                          href="forgotpassword"
                          className="display-block text-center m-t-md text-sm"
                        >
                          Quên mật khẩu?
                        </a>
                        <a
                          href="login"
                          className="btn btn-default btn-block m-t-md"
                        >
                          Đăng nhập tài khoản
                        </a>
                      </form>
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

export { RegisterPage };
