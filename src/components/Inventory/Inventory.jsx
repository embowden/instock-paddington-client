import React, { Component } from "react";
import axios from "axios";
import InventoryTable from "../Table/InventoryTable";
import "./inventory.scss";
import "../../styles/liftoff.scss";

export default class Inventory extends Component {
  state = {
    inventories: null,
  };

  getAllInventories = () => {
    axios
      .get(`http://localhost:8080/inventory`)
      .then((response) => {
        console.log(response.data);
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
            <InventoryTable
              getData={this.getAllInventories}
              inventories={this.state.inventories}
            />
          )}
        </div>
      </>
    );
  }
}
