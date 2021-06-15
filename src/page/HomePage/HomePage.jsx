import React from "react";
const axios = require("axios");
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      auth: false,
    };
  }
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://45.77.12.16:4000/account/",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
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
