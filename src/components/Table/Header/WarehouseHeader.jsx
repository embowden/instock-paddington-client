import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import SearchButton from "../Buttons/SearchButton";

export class WarehouseHeader extends Component {
  render() {
    return (
      <>
        <div className="table-header" id="warehouse-header">
          <div className="table-header__left" id="l-page-header">
            <h1 className="table-header__header">Warehouses </h1>
          </div>
          <div className="table-header__left" id="non-mobile"></div>
          <div className="table-header__right ">
            <SearchButton />
          </div>
          <div className="table-header__right" id="wide">
            <Link to={`/warehouses/add/`} className="button-link">
              <div className="blue-button">+ Add New Warehouse </div>{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default WarehouseHeader;
