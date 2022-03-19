import React, { Component } from "react";
import "./edit-inventory-item.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";

export default class EditInventoryItem extends Component {
  state = {
    itemName: null,
    description: null,
    category: null,
    status: true,
    quantity: 0,
    warehouse: null,
    formValid: true,
    warehouseData: null,
  };

  getInventoryItem = () => {
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
        let boolStatus = this.getItemStatus(response);
        this.setState({
          itemName: response.data.itemName,
          description: response.data.description,
          category: response.data.category,
          status: boolStatus,
          quantity: response.data.quantity,
          warehouse: response.data.warehouseName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getItemStatus = (response) => {
    if (response.data.status === "In Stock") {
      return "true";
    } else {
      return "false";
    }
  };

  getWarehouseList = () => {
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
  };

  updateItem = (event) => {
    if (this.isFormValid()) {
      let statusMessage =
        event.target.status.value === "true" ? "In Stock" : "Out of Stock";
      console.log(statusMessage);
      console.log(event.target.status.value);
      let nameAndId = event.target.warehouse.value.split(" "); //*Takes value target from warehouse drop down
      let warehouseID = String(nameAndId.slice(-1)[0]); //*grabs last item in array, always ID
      let warehouseNameArr = nameAndId.filter(
        (element) => element !== warehouseID
      ); //* filters out ID so only warehouse name elements remain
      let warehouseName = warehouseNameArr.join(" "); //*adds remaining elements together in a string
      axios
        .post(
          `http://localhost:8080/inventory/${this.props.match.params.id}/${warehouseID}`,
          {
            warehouseID: warehouseID,
            warehouseName: warehouseName,
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: statusMessage,
            quantity: event.target.quantity.value,
          }
        )
        .then(function (response) {
          event.target.reset();
          // this.getInventoryItem();
          alert(`Item updated successfully`);
          console.log(response);
        });
    } else {
      this.setState({
        formValid: false,
      });
    }
  };

  isFormValid = () => {
    if (
      this.state.itemName === "" ||
      this.state.description === "" ||
      this.state.category === "" ||
      this.state.status === "" ||
      this.state.warehouse === "" ||
      (this.state.status === "true" && this.state.quantity <= 0) ||
      (this.state.status === "false" && this.state.quantity > 0)
    ) {
      return false;
    }

    return true;
  };

  componentDidMount() {
    this.getInventoryItem();
    this.getWarehouseList();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (this.state.status === "false") {
      this.setState({
        quantity: 0,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateItem(event);
  };

  render() {
    return (
      <div className="add-inventory">
        <h1 className="add-inventory__header">
          <span className="add-inventory__back">
            <img src={arrow} alt="" />
          </span>
          Edit Inventory Item
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
                value={`${this.state.itemName}`}
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
                value={`${this.state.description}`}
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
                value={`${this.state.category}`}
              >
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
                <input
                  onChange={this.handleChange}
                  type="radio"
                  value="true"
                  name="status"
                />

                <label>In Stock</label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  value="false"
                  name="status"
                />
                <label>Out of Stock</label>
              </fieldset>
              {!this.state.warehouse && !this.state.formValid && (
                <ValidationMessage />
              )}
              {this.state.status === "true" && (
                <>
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
                    value={this.state.quantity}
                  />
                </>
              )}
              {!this.state.quantity &&
                this.state.status === "true" &&
                !this.state.formValid && <ValidationMessage />}
              <label>Warehouse</label>
              <select
                onChange={this.handleChange}
                className={`${
                  !this.state.category && !this.state.formValid
                    ? "add-inventory__input--missing"
                    : "add-inventory__input"
                }`}
                name="warehouse"
              >
                {this.state.warehouseData &&
                  this.state.warehouseData.map((warehouse) => {
                    return (
                      <option
                        key={warehouse.id}
                        value={`${warehouse.name} ${warehouse.id}`}
                        selected={warehouse.name === this.state.warehouse}
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
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
