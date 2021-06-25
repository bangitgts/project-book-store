import React from "react";
import { Header } from "../Header";

import ImageUploading from "react-images-uploading";
const axios = require("axios");

class InformationAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_file: null,
      image_preview: "",
      name: "",
      address: "",
      phoneNumber: "",
      sex: "",
      introduce: "",
      dataUser: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    this.setState({
      imageUser: imageList,
    });
  };
  handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];

    this.setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });
  };

  // Image/File Submit Handler
  handleSubmitFile = () => {
    if (this.state.image_file !== null) {
      let formData = new FormData();
      formData.append("file", this.state.image_file);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile
      const url = "http://45.77.12.16:4000/account/uploadavatar";
      var config = {
        method: "post",
        data: formData,
        url: url,
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-type": "multipart/form-data",
        },
      };
      axios(config)
        .then(function (response) {
          return response;
        })
        .then((data) => {
          alert("Thay đổi thành công");
        })
        .catch(function (error) {
          alert("Ảnh định dạng không đúng");
        });
    }
  };

  //   axios
  //     .post(
  //       url:'http://45.77.12.16:4000/account/uploadavatar',
  //       , formData, {
  //       headers: {
  //         "auth-token": localStorage.getItem("auth-token"),
  //         "Content-type": "multipart/form-data",
  //       },
  //       url:"http://45.77.12.16:4000/account/uploadavatar"
  //     })
  //     .then((res) => {
  //       console.log(`Success` + res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  onChangeText(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
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
          sex: String(data.sex),
          introduce: data.introduce,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
    }
  };
  handleChange(event) {

     this.setState({value: event.target.value});
  }
  onSubmit = (e) => {
    var qs = require("qs");
    var data = qs.stringify({
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      dateBirth: this.state.dateBirth,
      sex: parseInt(this.state.sex),
      introduce: this.state.introduce,
    });
    var config = {
      method: "put",
      url: "http://45.77.12.16:4000/account/changeinformation",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        alert("Sửa thông tin thành công");
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };
  render() {
    const { dataUser } = this.state;
    console.log(this.state.sex)
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
            <div className="info-background col-md-9">
              <div className="profile-content">
                <div class="info-title col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3>Hồ sơ của tôi</h3>
                  <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                </div>

                <div className="infor-edit col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label>Tên:</label>
                      <input
                        value={this.state.name}
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.onChangeText}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Địa chỉ:</label>
                      <input
                        value={this.state.address}
                        type="text"
                        className="form-control"
                        name="address"
                        onChange={this.onChangeText}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại:</label>
                      <input
                        value={this.state.phoneNumber}
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        onChange={this.onChangeText}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Ngày Sinh:</label>
                      <input
                        value={this.state.dateBirth}
                        type="date"
                        className="form-control"
                        name="dateBirth"
                        onChange={this.onChangeText}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Giới tính:</label>
                      <select
                        value={this.state.sex}
                        name="sex"
                        onChange={this.onChangeText}
                        required
                      >
                        <option value="1">
                          Nam
                        </option>
                        <option value="0">
                          Nữ
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Introduce:</label>
                      <input
                        value={this.state.introduce}
                        type="text"
                        className="form-control"
                        name="introduce"
                        onChange={this.onChangeText}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Lưu Lại
                    </button>
                  </form>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4>Thay ảnh đại diện</h4>
                    <div>
                      {/* image preview */}
                      <img
                        src={this.state.image_preview}
                        className="image-preview-user"
                        alt="image preview"
                      />
                      {/* image input field */}
                      <input
                        size="60"
                        type="file"
                        name="file"
                        onChange={this.handleImagePreview}
                        accept="image/png, image/jpeg"
                      />

                      {/* <button
                        
                        onClick={this.handleSubmitFile}
                        class="btn btn-primary"
                      >
                        Upload
                      </button> */}

                      {/* test */}
                      <button
                        onClick={this.handleSubmitFile}
                        type="submit"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Lưu ảnh
                      </button>
                      {this.state.dung}

                      {/*   
                      <input
                        type="submit"
                        onClick={this.handleSubmitFile}
                        value="Submit"
                      /> */}
                    </div>
                  </div>
                </div>
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
