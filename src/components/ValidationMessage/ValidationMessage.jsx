import "../ValidationMessage/validation-message.scss";
import React, { Component } from "react";
import notValid from "../../assets/icons/error-24px.svg";

export default class ValidationMessage extends Component {
  render() {
    return (
      <div className="validation-message">
        <span className="validation-message__string">
          <img src={notValid} alt="" />
          This field is required
        </span>
      </div>
    );
  }
}
