import EditWarehouseContainer from "./EditWarehouseContainer";
import React, { Component } from "react";
import "../../styles/liftoff.scss";

export default class EditWarehouse extends Component {
  render() {
    return (
      <div className="liftoff-two">
        <EditWarehouseContainer match={this.props.match} />
      </div>
    );
  }
}
