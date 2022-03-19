import React, { Component } from "react";
import SingleInventory from "./Header/SingleInventoryHeader";
import "./table.scss";

const SingleInventoryTable = ({ inventories, getData }) => {
  inventories.map((inventory) => {
    return <SingleInventory inventories={inventories} />;
  });

  return (
    <>
      <div className="table">
        <SingleInventory />
      </div>
    </>
  );
  //   });
};

export default SingleInventoryTable;
