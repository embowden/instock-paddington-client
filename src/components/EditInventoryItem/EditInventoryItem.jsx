import EditInventoryContainer from "./EditInventoryContainer";
import React, { Component } from "react";
import "../../styles/liftoff.scss";

export default class EditInventoryItem extends Component {
  render() {
    return (
      <div className="liftoff">
        <EditInventoryContainer
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}
