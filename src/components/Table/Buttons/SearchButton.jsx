import React, { Component } from "react";
import "./search-button.scss";
import searchIcon from "../../../assets/icons/search-24px.svg";

export class SearchButton extends Component {
  render() {
    return (
      <div className="search-button">
        Search...
        <img src={searchIcon} alt="search-icon" id="search-icon" />
      </div>
    );
  }
}

export default SearchButton;
