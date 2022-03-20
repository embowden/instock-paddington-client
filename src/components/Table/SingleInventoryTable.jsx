import React, { Component } from "react";
import SingleInventory from "./Header/SingleInventoryHeader";
import "./table.scss";

const SingleInventoryTable = ({ inventories, match }) => {
  // inventories.map((inventory) => {
  //   return <SingleInventory inventories={inventories} />;
  // });

  const singleInventory = inventories.find(
    (inventoryItem) => inventoryItem.id === match.params.id
  );

  return (
    <>
      <div className="table liftoff">
        <SingleInventory inventoryItem={singleInventory} />
      </div>
    </>
  );
};

export default SingleInventoryTable;
