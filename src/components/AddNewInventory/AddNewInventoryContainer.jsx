import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./add-new-inventory.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default class AddNewInventory extends Component {
  state = {
    itemName: null,
    description: null,
    category: null,
    status: null,
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
    if (
      event.target.name === "status" &&
      event.target.value === "Out Of Stock"
    ) {
      this.setState({
        quantity: 0,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  resetState = () => {
    this.setState({
      itemName: null,
      description: null,
      category: null,
      status: null,
      quantity: null,
      warehouse: null,
      formValid: true,
      warehouseData: null,
    });
  };

  isFormValid = () => {
    if (
      !this.state.itemName ||
      !this.state.description ||
      !this.state.category ||
      !this.state.status ||
      !this.state.warehouse ||
      (this.state.quantity <= 0 && this.state.status === "In Stock") ||
      (this.state.quantity > 0 && this.state.status === "Out Of Stock")
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
          quantity: String(this.state.quantity),
        })
        .then((response) => {
          console.log(response);
          event.target.reset();
          this.resetState();
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "New inventory item has been added!",
            confirmButtonColor: "#2e66e5",
          });
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
          <Link to={"/inventory"} className="add-inventory__back">
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
                <ValidationMessage message={"Item Name Required"} />
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
                <ValidationMessage message={"Description Required"} />
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
                <option value="Health">Health</option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Gear">Gear</option>
                <option value="Electronics">Electronics</option>
              </select>
              {!this.state.category && !this.state.formValid && (
                <ValidationMessage message={"Category Required"} />
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
                  value="In Stock"
                  name="status"
                />
                <label>In Stock</label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  value="Out Of Stock"
                  name="status"
                />
                <label>Out of Stock</label>
              </fieldset>

              {this.state.status === "In Stock" &&
                this.state.quantity === 0 &&
                !this.state.formValid && (
                  <ValidationMessage message={"Stock Status Required"} />
                )}
              {this.state.status !== "Out Of Stock" && (
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
                    placeholder="0"
                  />
                  {!this.state.quantity && !this.state.formValid && (
                    <ValidationMessage message={"Quantity Required"} />
                  )}
                </>
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
                <ValidationMessage message={"Warehouse Required"} />
              )}
            </div>
          </div>

          <div className="add-inventory__buttons">
            <Link className="add-inventory__cancel-link" to="/inventory">
              <button className="add-inventory__cancel">Cancel</button>
            </Link>
            <button type="submit" className="add-inventory__add">
              +Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
