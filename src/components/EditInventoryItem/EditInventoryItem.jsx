import EditInventoryContainer from "./EditInventoryContainer";
import React, { Component } from "react";
import "../../styles/liftoff.scss";

export default class EditInventoryItem extends Component {
  render() {
    return (
      <div className="liftoff">
        <EditInventoryContainer match={this.props.match} />
      </div>
    );
  }
}
