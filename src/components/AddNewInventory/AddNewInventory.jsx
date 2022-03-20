import AddNewInventoryContainer from "./AddNewInventoryContainer";
import React, { Component } from "react";
import "../../styles/liftoff.scss";

export default class EditInventoryItem extends Component {
  render() {
    return (
      <div className="liftoff">
        <AddNewInventoryContainer match={this.props.match} />
      </div>
    );
  }
}
