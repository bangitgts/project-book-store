import React from "react";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      auth: false,
    };
  }
  componentDidMount() {
    var axios = require("axios");
   
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/account/",
      headers: {
        "auth-token":localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return <h2> Đây Là HommePage</h2>;
  }
}
export { HomePage };
