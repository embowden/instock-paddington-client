import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../WarehouseDetails/warehouse-details.scss";
import Arrow from "../Arrow/Arrow";
import Modal from "../../Modal/Modal";
import editIcon from "../../../assets/icons/edit-24px.svg";
import deleteIcon from "../../../assets/icons/delete-outline-24px.svg";

export class WarehouseDetailsBody extends Component {
  inventoryData = this.props.inventories;
  state = {
    show: false,
    currentID: this.props.inventories.id,
  };

  render() {
    // console.log(this.state.currentID);

    return (
      <>
        <div className="table-row__column">
          <div className="table-row__column--indiviual">
            <div className="mobile-divider">
              <div className="table-row__column--1">
                <div className="row-1 mobile">
                  <div id="mobile-only">Inventory Item</div>
                  <Link to={`/inventories/details/${this.state.currentID}`}>
                    {this.props.inventories.name}
                    <Arrow />
                  </Link>
                </div>
                <div className="row-2 mobile">
                  <div id="mobile-only">Category</div>
                  {this.props.inventories.address},{" "}
                  {this.props.inventories.city},{" "}
                  {this.props.inventories.country}
                  <br></br>
                </div>
              </div>
              <div className="table-row__column--2">
                <div className="row-3 mobile">
                  <div id="mobile-only">Status</div>
                  <div className="instock">IN STOCK</div>
                  <div className="no-stock">OUT OF STOCK</div>
                </div>
                <div className="row-4 mobile">
                  <div id="mobile-only">QTY</div>
                  <p> {this.props.inventories.contact.phone}</p>
                  <p> {this.props.inventories.contact.email}</p>
                </div>
              </div>
            </div>
            <div className="table-row__column--3">
              <div className="row-5 mobile">
                <img
                  src={deleteIcon}
                  alt="Delete-Icon"
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
                  objectName={this.props.inventories.name}
                  getData={this.props.getData}
                />{" "}
                <Link to={`/inventories/edit/${this.state.currentID}`}>
                  <img src={editIcon} alt="Edit-Icon" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WarehouseDetailsBody;
