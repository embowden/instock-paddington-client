import React, { Component } from "react";
import TableBody from "./Body/TableBody";
import InventoryBody from "./Body/InventoryBody";
import InventoryLabels from "./Labels/InventoryLabels";
import SingleInventory from "./Header/SingleInventoryHeader";
import "./table.scss";
import InventoryHeader from "./Header/InventoryHeader";
import Warehouses from "../Warehouses/Warehouses";

const Table = ({ inventories, getData }) => {
  // const addedinventories = props.warehouseData.map((field) => {
  //   render() {

  //       <div key={field.timestamp} className="comments">

  //   const addedinventories = props.warehouseData.map((warehouse) => {

  inventories.map((inventory) => {
    return <InventoryHeader inventories={inventories} />;
  });

  return (
    <>
      <div className="table">
        #2: Warehouse Details
        <InventoryHeader />
        <InventoryLabels />
        {inventories.map((inventoryObject) => {
          return (
            <InventoryBody
              getData={getData}
              inventories={inventoryObject}
              key={inventoryObject.id}
            />
          );
        })}
        #5: Inventory Item Details
        <SingleInventory />
      </div>
    </>
  );
  //   });
};

export default Table;
