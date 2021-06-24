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
            <div className="input-field second-wrap">
              <div className="input-select">
                <select data-trigger name="choices-single-defaul">
                  <option placeholder>All Category</option>
                  <option>Loại 1 </option>
                  <option>Loại 2</option>
                  <option>Loại 3</option>
                  <option>Loại 4</option>
                  <option>Loại 5</option>
                  <option>Loại 6</option>
                  <option>Loại 7</option>
                </select>
              </div>
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
