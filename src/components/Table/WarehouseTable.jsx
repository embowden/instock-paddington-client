import React, { Component } from "react";
import TableHeader from "./Header/TableHeader";
import TableLabels from "./Labels/TableLabels";
import TableBody from "./Body/TableBody";
import "./table.scss";
import TableSummary from "./Information/TableSummary";
import Warehouses from "../Warehouses/Warehouses";

// import searchIcon from "../../assets/icons/search-24px.svg";
// import { search-icon } from "../;

const Table = ({ warehouses, getData }) => {
  // const addedWarehouses = props.warehouseData.map((field) => {
  //   render() {

  //       <div key={field.timestamp} className="comments">

  //   const addedWarehouses = props.warehouseData.map((warehouse) => {

  warehouses.map((warehouse) => {
    return <TableBody warehouses={warehouses} />;
  });

  return (
    <>
      <div className="table">
        <TableHeader />
        {/* <TableSummary /> */}
        {/* <div className="table-row"> */}
        <TableLabels />
        {warehouses.map((warehouseObject) => {
          return (
            <TableBody
              getData={getData}
              warehouses={warehouseObject}
              key={warehouseObject.id}
            />
          );
        })}
        ;{/* </div> */}
      </div>
    </>
  );
  //   });
};

export default Table;
