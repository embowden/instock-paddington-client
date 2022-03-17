import React, { Component } from "react";
import "./warehouse.scss";
import axios from "axios";
import Modal from "../Modal/Modal";
import WarehouseTable from "../Table/WarehouseTable";

//Axios
const portAPI = "http://localhost:8080/warehouses";
export default class Warehouses extends Component {
  state = {
    warehouses: null,
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

  componentDidMount() {
    this.getAllWarehouse();
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
