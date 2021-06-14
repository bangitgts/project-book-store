/* eslint-disable no-useless-constructor */
import { Component } from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./auth";
import { HomePage } from "./page/HomePage";
var axios = require("axios");
class App extends Component {
  state = {
    authed: false,
  };
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    var myHeaders = new Headers();
    myHeaders.append("auth-token", "");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://45.77.12.16:4000/account/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 200){
          this.setState({
            authed: false
          })
        }
        if(result.status ===400){
          this.setState({
            authed:false
          })
        }
      })
      .catch((error) => console.log("error", error));
  }
  showContent(routes) {
    var result = null;
    if (routes.length > 0) {
      var result = routes.map((route) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }
  render() {
    const { authed } = this.state;
    return (
      <Router>
        {" "}
        {this.showContent(routes)}{" "}
        <PrivateRoute authed path="/homepage" component={HomePage} />
      </Router>
    );
  }
}

export default App;
