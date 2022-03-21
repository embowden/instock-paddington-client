import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import Arrow from "../Arrow/Arrow";
import Modal from "../../Modal/Modal";
import editIcon from "../../../assets/icons/edit-24px.svg";
import deleteIcon from "../../../assets/icons/delete-outline-24px.svg";

export class WarehouseBody extends Component {
  state = {
    show: false,
    currentID: this.props.warehouses.id,
  };

  render() {
    return (
      <>
        <div className="table-row__column">
          <div className="table-row__column--indiviual">
            <div className="mobile-divider">
              <div className="table-row__column--1">
                <div className="row-1 mobile">
                  <div id="mobile-only">Warehouse</div>
                  <Link
                    id="flex"
                    to={`/warehouses/details/${this.state.currentID}`}
                  >
                    {this.props.warehouses.name}
                    <Arrow />
                  </Link>
                </div>
                <div className="row-2 mobile">
                  <div id="mobile-only">Warehouse Address</div>
                  {this.props.warehouses.address}, {this.props.warehouses.city},{" "}
                  {this.props.warehouses.country}
                  <br></br>
                </div>
              </div>
              <div className="table-row__column--2">
                <div className="row-3 mobile">
                  <div id="mobile-only">Contact Name</div>
                  {this.props.warehouses.contact.name}
                </div>
                <div className="row-4 mobile">
                  <div id="mobile-only">Contact Details</div>
                  <p> {this.props.warehouses.contact.phone}</p>
                  <p> {this.props.warehouses.contact.email}</p>
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
                  type="warehouse"
                  show={this.state.show}
                  objectID={this.state.currentID}
                  objectName={this.props.warehouses.name}
                  getData={this.props.getData}
                />
                <Link to={`/warehouses/edit/${this.state.currentID}`}>
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

export default WarehouseBody;
