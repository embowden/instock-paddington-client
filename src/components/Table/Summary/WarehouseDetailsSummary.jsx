import React from "react";
import "../table.scss";
import "../../WarehouseDetails/warehouse-details.scss";

const WarehouseDetailsSummary = ({ warehouses, match }) => {
  const currWarehouse = warehouses.find(
    (warehouse) => warehouse.id === match.params.id
  );

  return (
    <>
      <div className="summary">
        <div className="summary__left--details" id="l-page-header">
          <p id="title">Warehouse</p>
          <p id="mobile-only">
            {currWarehouse.address}, {currWarehouse.city},
            {currWarehouse.country}
          </p>
          <p id="non-mobile">
            {currWarehouse.address}
            <br></br>
            {currWarehouse.city}, {currWarehouse.country}
          </p>
        </div>
        <div className="summary__middle" id="non-mobile"></div>
        <div className="mobile-divider">
          <div className="summary__right ">
            <div>
              <p id="title">Contact Name</p> <p>{currWarehouse.contact.name}</p>
              <p>{currWarehouse.contact.position}</p>
            </div>
          </div>
          <div className="summary__right ">
            <div>
              <p id="title">Contact Details</p>
            </div>
            <p>{currWarehouse.contact.phone}</p>
            <p>{currWarehouse.contact.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarehouseDetailsSummary;
