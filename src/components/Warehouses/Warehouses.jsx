import React, { Component } from "react";
import "./warehouse.scss";
import axios from "axios";
import WarehouseTable from "../Table/WarehouseTable";

//Axios
const portAPI = "http://localhost:8080/warehouses";
export default class Warehouses extends Component {
  state = {
    warehouses: null,
    // inventories: null,
  };

  getAllWarehouse = () => {
    axios
      .get(`http://localhost:8080/warehouses`)
      .then((response) => {
        console.log(response);
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getAllInventories = () => {
  //   axios
  //     .get(`http://localhost:8080/warehouses`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         inventories: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  componentDidMount() {
    this.getAllWarehouse();
    // this.getAllInventories();
  }

  // componentDidUpdate() {
  //   this.getAllWarehouse();
  // }

  render() {
    return (
      <>
        {this.state.warehouses && (
          <WarehouseTable
            getData={this.getAllWarehouse}
            warehouses={this.state.warehouses}
          />
        )}
      </>
    );
  }
}
