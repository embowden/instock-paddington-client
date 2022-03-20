import React, { Component } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import SingleInventoryTable from "../Table/SingleInventoryTable";
import "./inventory-item-details.scss";
import "../../styles/liftoff.scss";

//Axios
const portAPI = "http://localhost:8080/warehouses";
export default class InventoryItemDetails extends Component {
  state = {
    // warehouses: null,
    inventories: null,
  };

  // getAllWarehouse = () => {
  //   axios
  //     .get(`http://localhost:8080/warehouses`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         warehouses: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
    // this.getAllWarehouse();
    this.getAllInventories();
  }

  // componentDidUpdate() {
  //   this.getAllWarehouse();
  // }

  render() {
    return (
      <>
        {this.state.inventories && (
          <SingleInventoryTable
            // getData={this.getAllInventories}
            inventories={this.state.inventories}
            match={this.props.match}
          />
        )}
      </>
    );
  }
}
