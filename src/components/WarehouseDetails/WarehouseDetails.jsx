import React, { Component } from "react";
import "./warehouse-details.scss";
import "../../styles/liftoff.scss";
import axios from "axios";
import WarehouseDetailsTable from "../Table/WarehouseDetailsTable";

export default class WarehouseDetails extends Component {
  state = {
    warehouses: null,
    inventories: null,
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
    this.getAllWarehouse();
    this.getAllInventories();
  }

  render() {
    return (
      <>
        <div className="liftoff">
          {this.state.inventories && (
            <WarehouseDetailsTable
              getData={this.getAllInventories}
              inventories={this.state.inventories}
              warehouses={this.state.warehouses}
              match={this.props.match}
            />
          )}
        </div>
      </>
    );
  }
}
