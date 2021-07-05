import React from "react";
import { Header } from "../Header";
import { Search } from "../Search";
import { ListBook } from "../../components/ListBook";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="hieuung">
        <Header />
        {/*/header*/}
        <section>
          <div className="container">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Products</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1
                  className="text-center"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "bold",
                  }}
                >
                  ONLINE BOOK'S STORE
                </h1>
              </div>
          
              <div className="col-sm-12 padding-right">
                {/* ListBOOK */}

                <ListBook />
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <ul class="list-inline text-center">
            <li>2021 © Chuyên đề thực tế 2</li>
          </ul>
        </footer>
      </div>
    );
  }
}
export { HomePage };
