/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
class Search extends React.Component {
  render() {
    return (
      <div className="s131">
        <form>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input
                id="search"
                type="text"
                placeholder="What book are you looking for?"
              />
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export { Search };
