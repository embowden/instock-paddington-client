import React, { Component } from "react";
import TableHeader from "./Header/TableHeader";
import TableLabels from "./Labels/TableLabels";
import TableBody from "./Body/TableBody";
import InventoryBody from "./Body/InventoryBody";
import InventoryLabel from "./Labels/InventoryLabels";
import "./table.scss";
import InventoryHeader from "./Header/InventoryHeader";
import Warehouses from "../Warehouses/Warehouses";

const WarehouseTable = ({ warehouses, getData }) => {
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
      </div>
    </>
  );
  //   });
};

export default WarehouseTable;
