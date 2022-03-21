import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Inventory/inventory.scss";
import Arrow from "../Arrow/Arrow";
import Modal from "../../Modal/Modal";
import editIcon from "../../../assets/icons/edit-24px.svg";
import deleteIcon from "../../../assets/icons/delete-outline-24px.svg";

export class InventoryBody extends Component {
  inventoryData = this.props.inventories;
  state = {
    show: false,
    currentID: this.props.inventories.id,
  };

  render() {
    return (
      <>
        <div className="table-row__column">
          <div className="table-row__column--indiviual">
            <div className="mobile-divider">
              <div className="table-row__column--1">
                <div className="row-1 mobile">
                  <div id="mobile-only">INVENTORY ITEM</div>
                  <Link
                    id="flex"
                    to={`/inventory/details/${this.state.currentID}`}
                  >
                    {this.props.inventories.itemName} <Arrow />
                  </Link>
                </div>
                <div className="row-2 mobile">
                  <div id="mobile-only">CATEGORY</div>
                  {this.props.inventories.category}
                  <br></br>
                </div>
              </div>
              <div className="table-row__column--2">
                <div className="row-3 mobile">
                  <div id="mobile-only">STATUS</div>
                  {this.props.inventories.status === "In Stock" ? (
                    <div className="instock">IN STOCK</div>
                  ) : (
                    <div className="no-stock">OUT OF STOCK</div>
                  )}
                </div>
                <div className="row-4 mobile">
                  <div id="mobile-only">QTY</div>
                  <p> {this.props.inventories.quantity}</p>
                </div>
                <div className="row-4 mobile">
                  <div id="mobile-only">WAREHOUSE</div>
                  <p> {this.props.inventories.warehouseName}</p>
                </div>
              </div>
            </div>
            <div className="table-row__column--3">
              <div className="row-5 mobile">
                <img
                  src={deleteIcon}
                  alt="Delete-Icon"
                  id="row5"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                />
                <Modal
                  onClose={() => {
                    this.setState({ show: false });
                  }}
                  type="inventory"
                  show={this.state.show}
                  objectID={this.state.currentID}
                  objectName={this.props.inventories.itemName}
                  getData={this.props.getData}
                />
                <Link to={`/inventory/edit/${this.state.currentID}`}>
                  <img src={editIcon} alt="Edit-Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryBody;
