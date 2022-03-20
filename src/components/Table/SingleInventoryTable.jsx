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
      <div className="liftoff">
        <div className="table">
          <SingleInventory inventoryItem={singleInventory} />
        </div>
      </div>
    </>
  );
};

export default SingleInventoryTable;
