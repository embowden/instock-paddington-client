import React, { Component } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import InventoryTable from "../Table/InventoryTable";

//Axios
const portAPI = "http://localhost:8080/warehouses";
export default class Inventory extends Component {
  state = {
    inventories: null,
  };

  getAllInventories = () => {
    axios
      .get(`http://localhost:8080/warehouses`)
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

  // componentDidUpdate() {
  //   this.getAllInventories();
  // }

  render() {
    return (
      <>
        {this.state.warehouses && (
          <InventoryTable
            getData={this.getAllInventories}
            warehouses={this.state.inventories}
          />
        )}
      </>
    );
  }
}
