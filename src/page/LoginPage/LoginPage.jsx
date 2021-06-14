import React from "react";
const axios = require("axios");
const qs = require("qs");

class LoginPage extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const {email,password} = this.state;
  
    var data = qs.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: "http://45.77.12.16:4000/account/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if(response.status === 200){
          console.log(response.data.data.token);
          localStorage.setItem("auth-token", response.data.data.token);
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="page-content page-login">
        <div className="page-inner">
          <div id="main-wrapper">
            <div className="row">
              <div className="col-md-3 center">
                <div className="panel panel-white" id="js-alerts">
                  <div className="panel-body">
                    <div className="login-box">
                      <h2
                        className="text-lg text-center m-t-xs"
                      >
                        BOOK STORE
                      </h2>
                      <p className="text-center m-t-md">
                        Vui lòng nhập email & mật khẩu
                        <br></br> để đăng nhập
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
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control password"
                            placeholder="Nhập mật khẩu của bạn"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                        >
                          Đăng nhập
                        </button>
                        <a
                          href="forgot.html"
                          className="display-block text-center m-t-md text-sm"
                        >
                          Quên mật khẩu?
                        </a>
                        <a
                          href="register.html"
                          className="btn btn-default btn-block m-t-md"
                        >
                          Tạo Tài Khoản
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

export { LoginPage };
