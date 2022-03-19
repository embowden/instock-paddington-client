import React, { Component } from "react";
import WarehouseDetailsBody from "./Body/WarehouseDetailsBody";
import WarehouseDetailsLabels from "./Labels/WarehouseDetailsLabels";
import WarehouseDetailsHeader from "./Header/WarehouseDetailsHeader";
import "./table.scss";

const WarehouseDetailsTable = ({ inventories, getData }) => {
  inventories.map((inventory) => {
    return <WarehouseDetailsHeader inventories={inventories} />;
  });

  return (
    <>
      <div className="table">
        <WarehouseDetailsHeader />
        <WarehouseDetailsLabels />
        {inventories.map((inventoryObject) => {
          return (
            <WarehouseDetailsBody
              getData={getData}
              inventories={inventoryObject}
              key={inventoryObject.id}
            />
          );
        })}
      </div>
    </>
  );
  //   });
};

export default WarehouseDetailsTable;
