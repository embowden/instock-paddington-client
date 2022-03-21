import React, { Component } from "react";
import "../../styles/liftoff.scss";
import axios from "axios";
import WarehouseTable from "../Table/WarehouseTable";

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

  render() {
    return (
      <>
        <div className="liftoff">
          {this.state.warehouses && (
            <WarehouseTable
              getData={this.getAllWarehouse}
              warehouses={this.state.warehouses}
            />
          )}
        </div>
      </>
    );
  }
}
