import React, { Component } from "react";
import WarehouseDetailsBody from "./Body/WarehouseDetailsBody";
import WarehouseDetailsLabels from "./Labels/WarehouseDetailsLabels";
import WarehouseDetailsHeader from "./Header/WarehouseDetailsHeader";
import "./table.scss";

const WarehouseDetailsTable = ({
  warehouses,
  inventories,
  getData,
  match,
}) => {
  // warehouses.map((inventory) => {
  //   return <WarehouseDetailsHeader inventories={inventories} />;
  // });

  return (
    <>
      <div className="table">
        <WarehouseDetailsHeader
          warehouses={warehouses}
          match={match}
        />
        <WarehouseDetailsLabels />
        {inventories.filter((inventoryObject) => {
          return inventoryObject.warehouseID === match.params.id
        }).map((inventoryObject) => {
          return (
            <WarehouseDetailsBody
              getData={getData}
              inventoryItem={inventoryObject}
              key={inventoryObject.id}
            />
          );
        })}
        {/* {inventories.map((inventoryObject) => {
          return (
            <WarehouseDetailsBody
              getData={getData}
              inventories={inventoryObject}
              key={inventoryObject.id}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default WarehouseDetailsTable;

// {videosList
//             .filter((videoObj) => {
//               return videoObj.id !== currentVideoID;
//             })
//             .map((videoObj) => {
//               return (
//                 <Link
//                   className="next-videos__link"
//                   key={videoObj.id}
//                   to={`/videos/${videoObj.id}`}
//                 >
//                   <Preview id={videoObj.id} thisVideoObject={videoObj} />
//                 </Link>
//               );
//             })}