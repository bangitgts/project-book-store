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
      redirect: false,
      isVerified: false,
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  Redirect() {
    console.log("1");
    window.location = "http://www.vietjack.com";
  }
  handleSubmit(e) {
    console.log(this.state.email);
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
          store.addNotification({
            title: "Đng chuyển!",
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

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
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
                        Nhập email của bạn để lấy lại mật khẩu
                      </p>
                      <form className="m-t-md" onSubmit={this.handleSubmit}>
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
