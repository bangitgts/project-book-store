import React from "react";

import { Header } from "../Header";

class InformationAccount extends React.Component {
  render() {
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/1063px-New_user_icon-01.svg.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                {/* END SIDEBAR USERPIC */}
                {/* SIDEBAR USER TITLE */}
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">Lorem ipsum dolor sit amet.</div>
                  <div className="profile-usertitle-job">lorem3</div>
                </div>
                {/* END SIDEBAR USER TITLE */}
                {/* SIDEBAR BUTTONS */}
                <div className="profile-userbuttons">
                  <button type="button" className="btn btn-success btn-sm">
                    Follow
                  </button>
                </div>
                {/* END SIDEBAR BUTTONS */}
                {/* SIDEBAR MENU */}
                <div className="profile-usermenu">
                  <ul className="nav">
                 
                    <li className="active">
                      <a href="#">
                        <i className="glyphicon glyphicon-user" />
                        Tài Khoản của tôi{" "}
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
            <div className="col-md-9">
              <div className="profile-content">
                Some user related content goes here...
              </div>
            </div>
          </div>
        </div>

        <footer id="footer"></footer>
      </div>
    );
  }
}

export { InformationAccount };
