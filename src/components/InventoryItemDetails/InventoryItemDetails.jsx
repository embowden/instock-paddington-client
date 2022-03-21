import React, { Component } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import SingleInventoryTable from "../Table/SingleInventoryTable";
import "../../styles/liftoff.scss";

export default class InventoryItemDetails extends Component {
  state = {
    inventories: null,
  };

  getAllInventories = () => {
    axios
      .get(`http://localhost:8080/inventory`)
      .then((response) => {
        console.log(response);
        this.setState({
          inventories: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getAllInventories();
  }

  render() {
    return (
      <>
        <div className="liftoff">
          {this.state.inventories && (
            <SingleInventoryTable
              inventories={this.state.inventories}
              match={this.props.match}
            />
          )}
        </div>
      </>
    );
  }
}
