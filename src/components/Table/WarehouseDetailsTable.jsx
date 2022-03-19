import React from "react";
import WarehouseDetailsBody from "./Body/WarehouseDetailsBody";
import WarehouseDetailsLabels from "./Labels/WarehouseDetailsLabels";
import WarehouseDetailsHeader from "./Header/WarehouseDetailsHeader";
import "./table.scss";

const WarehouseDetailsTable = ({ warehouses, inventories, getData, match }) => {
  return (
    <>
      <div className="table">
        <WarehouseDetailsHeader warehouses={warehouses} match={match} />
        <WarehouseDetailsLabels />
        {inventories
          .filter((inventoryObject) => {
            return inventoryObject.warehouseID === match.params.id;
          })
          .map((inventoryObject) => {
            return (
              <WarehouseDetailsBody
                getData={getData}
                inventoryItem={inventoryObject}
                key={inventoryObject.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default WarehouseDetailsTable;
