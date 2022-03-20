import AddNewWarehouseContainer from "./AddNewWarehouseContainer";
import React, { Component } from "react";
import "../../styles/liftoff.scss";

export default class AddNewWarehouse extends Component {
  render() {
    return (
      <div className="liftoff-two">
        <AddNewWarehouseContainer match={this.props.match} />
      </div>
    );
  }
}
