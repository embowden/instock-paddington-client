import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../WarehouseDetails/warehouse-details.scss";
import Arrow from "../Arrow/Arrow";
import Modal from "../../Modal/Modal";
import editIcon from "../../../assets/icons/edit-24px.svg";
import deleteIcon from "../../../assets/icons/delete-outline-24px.svg";

export class WarehouseDetailsBody extends Component {
  state = {
    show: false,
    inventoryItem: this.props.inventoryItem,
  };

  render() {
    console.log(this.state.inventoryItem);

    return (
      <>
        <div className="table-row__column">
          <div className="table-row__column--indiviual">
            <div className="mobile-divider">
              <div className="table-row__column--1">
                <div className="row-1 mobile">
                  <div id="mobile-only">Inventory Item</div>
                  <Link
                    id="flex"
                    to={`/inventory/details/${this.state.inventoryItem.id}`}
                  >
                    {this.state.inventoryItem.itemName}
                    <Arrow />
                  </Link>
                </div>
                <div className="row-2 mobile">
                  <div id="mobile-only">Category</div>
                  {this.state.inventoryItem.category}
                  <br></br>
                </div>
              </div>
              <div className="table-row__column--2">
                <div className="row-3 mobile">
                  <div id="mobile-only">Status</div>
                  {this.props.inventoryItem.status === "In Stock" ? (
                    <div className="instock">IN STOCK</div>
                  ) : (
                    <div className="no-stock">OUT OF STOCK</div>
                  )}
                </div>
                <div className="row-4 mobile">
                  <div id="mobile-only">QTY</div>
                  <p>{this.state.inventoryItem.quantity}</p>
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
                  objectID={this.state.inventoryItem.id}
                  objectName={this.state.inventoryItem.itemName}
                  getData={this.props.getData}
                />
                <Link to={`/inventory/edit/${this.state.inventoryItem.id}`}>
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

export default WarehouseDetailsBody;
