// import React, { Component } from "react";
import InventoryHeader from "./Header/InventoryHeader";
import InventoryLabels from "./Labels/InventoryLabels";
import InventoryBody from "./Body/InventoryBody";
import "./table.scss";

const InventoryTable = ({ inventories, getData }) => {
<<<<<<< HEAD
=======

>>>>>>> ef16bd8ea5e77cd0ae376c43478590e44a8b5dd4
  return (
    <>
      <div className="liftoff">
        <div className="table">
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
        </div>
      </div>
    </>
  );
};

export default InventoryTable;
