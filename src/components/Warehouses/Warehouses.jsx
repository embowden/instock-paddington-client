import React, { Component } from "react";
import Modal from "../Modal/Modal";
// import "./warehouse.scss";

export default class Warehouses extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ show: true });
          }}
          className="delete-icon"
        ></button>
        <Modal
          warehouseId={this.state.show}
          onClose={() => {
            this.setState({ show: false });
          }}
          show={this.state.show}
        />
      </>
    );
  }
}

{
  /* <div>Warehouses</div>; */
}
