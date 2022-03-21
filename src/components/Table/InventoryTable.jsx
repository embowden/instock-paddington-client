// import React, { Component } from "react";
import InventoryHeader from "./Header/InventoryHeader";
import InventoryLabels from "./Labels/InventoryLabels";
import InventoryBody from "./Body/InventoryBody";
import "./table.scss";

const InventoryTable = ({ inventories, getData }) => {
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
