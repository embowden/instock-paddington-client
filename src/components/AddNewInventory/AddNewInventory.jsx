import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./add-new-inventory.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";

export default class AddNewInventory extends Component {
  state = {
    itemName: null,
    description: null,
    category: null,
    status: true,
    quantity: null,
    warehouse: null,
    formValid: true,
    warehouseData: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouses`)
      .then((response) => {
        console.log(response);
        this.setState({
          warehouseData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (
      !this.state.itemName ||
      !this.state.description ||
      !this.state.category ||
      !this.state.status ||
      !this.state.quantity ||
      !this.state.warehouse
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      let nameAndId = event.target.warehouse.value.split(" "); //*Takes value target from warehouse drop down
      let warehouseID = String(nameAndId.slice(-1)[0]); //*grabs last item in array, always ID
      let warehouseNameArr = nameAndId.filter(
        (element) => element !== warehouseID
      ); //* filters out ID so only warehouse name elements remain
      let warehouseName = warehouseNameArr.join(" "); //*adds remaining elements together in a string

      axios
        .post(`http://localhost:8080/inventory/${warehouseID}`, {
          warehouseID: warehouseID,
          warehouseName: warehouseName,
          itemName: event.target.itemName.value,
          description: event.target.description.value,
          category: event.target.category.value,
          status: event.target.status.value,
          quantity: event.target.quantity.value,
        })
        .then(function (response) {
          event.target.reset();
          alert(`Item added successfully`);
          console.log(response);
        });
    } else {
      this.setState({
        formValid: false,
      });
    }
  };

  render() {
    return (
      <div className="add-inventory">
        <h1 className="add-inventory__header">
          <Link to={"/inventory"} className="add-warehouse__back">
            <img src={arrow} alt="" />
          </Link>
          Add New Inventory Item
        </h1>
        <form
          name="addInventory"
          onSubmit={this.handleSubmit}
          className="add-inventory__form"
        >
          <div className="add-inventory__form-elements">
            <div className="add-inventory__item-info">
              <h2 className="add-inventory__section-header">Item Details</h2>
              <label>Item Name</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                placeholder="Item Name"
                name="itemName"
              />
              {!this.state.itemName && !this.state.formValid && (
                <ValidationMessage />
              )}

              <label>Description</label>
              <textarea
                onChange={this.handleChange}
                className={`${
                  !this.state.description && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                placeholder="Please enter a brief item description"
                name="description"
              />
              {!this.state.description && !this.state.formValid && (
                <ValidationMessage />
              )}

              <label>Category</label>
              <select
                onChange={this.handleChange}
                className={`${
                  !this.state.category && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                placeholder="Please select"
                name="category"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Please select
                </option>
                <option value="Gealth">Health</option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Gear">Gear</option>
                <option value="Electronics">Electronics</option>
              </select>
              {!this.state.category && !this.state.formValid && (
                <ValidationMessage />
              )}
            </div>

            <div className="add-inventory__item-availablity">
              <h2 className="add-inventory__section-header">
                Item Availablity
              </h2>
              <label>Status</label>
              <fieldset className="add-inventory__in-stock" id="status">
                <input type="radio" value="In Stock" name="status" />
                <label>In Stock</label>
                <input type="radio" value="Out Of Stock" name="status" />
                <label>Out of Stock</label>
              </fieldset>

              {!this.state.warehouse && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Quantity</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.quantity && !this.state.formValid
                    ? "add-inventory__quantity add-inventory__input--missing"
                    : "add-inventory__quantity add-inventory__input"
                }`}
                name="quantity"
                type="number"
                placeholder="0"
              />
              {!this.state.quantity && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Warehouse</label>
              <select
                onChange={this.handleChange}
                className={`${
                  !this.state.category && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                name="warehouse"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Please select
                </option>
                (//*This maps through videos and returns names for each, then
                asigns to form option)
                {this.state.warehouseData &&
                  this.state.warehouseData.map((warehouse) => {
                    return (
                      <option
                        key={warehouse.id}
                        value={`${warehouse.name} ${warehouse.id}`}
                      >{`${warehouse.name}`}</option>
                    );
                  })}
              </select>
              {!this.state.category && !this.state.formValid && (
                <ValidationMessage />
              )}
            </div>
          </div>

          <div className="add-warehouse__buttons">
            <button type="reset" className="add-warehouse__cancel">
              Cancel
            </button>
            <button type="submit" className="add-warehouse__add">
              +Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
