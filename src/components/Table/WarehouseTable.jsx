import React, { Component } from "react";
import WarehouseHeader from "./Header/WarehouseHeader";
import WarehouseLabels from "./Labels/WarehouseLabels";
import WarehouseBody from "./Body/WarehouseBody";
import "./table.scss";

const WarehouseTable = ({ warehouses, getData }) => {
  // const addedWarehouses = props.warehouseData.map((field) => {
  //   render() {

  //       <div key={field.timestamp} className="comments">

  //   const addedWarehouses = props.warehouseData.map((warehouse) => {

  warehouses.map((warehouse) => {
    return <WarehouseBody warehouses={warehouses} />;
  });

  return (
    <>
      <div className="table">
        <WarehouseHeader />
        <WarehouseLabels />
        {warehouses.map((warehouseObject) => {
          return (
            <WarehouseBody
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
