import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
import "./edit-inventory-container.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default class EditInventoryItem extends Component {
  state = {
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse: null,
    formValid: true,
    warehouseData: null,
  };

  getInventoryItem = () => {
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          itemName: response.data.itemName,
          description: response.data.description,
          category: response.data.category,
          status: response.data.status,
          quantity: response.data.quantity,
          warehouse: response.data.warehouseName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
            status: event.target.status.value,
            quantity: String(this.state.quantity),
          }
        )
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Inventory item has been updated!",
            confirmButtonColor: "#2e66e5",
          });
          this.props.history.push("/inventory");
        });
    } else {
      console.log("else statment");
      this.setState({
        formValid: false,
      });
    }
  };

  isFormValid = () => {
    if (
      this.state.itemName === "" ||
      this.state.description === "" ||
      (this.state.quantity <= 0 && this.state.status === "In Stock") ||
      (this.state.quantity > 0 && this.state.status === "Out Of Stock")
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateItem(event);
  };

  render() {
    return (
      <div className="edit-inventory">
        <h1 className="edit-inventory__header">
          <Link to={"/inventory"} className="edit-inventory__back">
            <img src={arrow} alt="" />
          </Link>
          Edit Inventory Item
        </h1>
        <form
          name="editInventory"
          onSubmit={this.handleSubmit}
          className="edit-inventory__form"
        >
          <div className="edit-inventory__form-elements">
            <div className="edit-inventory__item-info">
              <h2 className="edit-inventory__section-header">Item Details</h2>
              <label>Item Name</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.itemName && !this.state.formValid
                    ? "edit-inventory__input--missing"
                    : "edit-inventory__input"
                }`}
                placeholder="Item Name"
                name="itemName"
                value={`${this.state.itemName}`}
              />
              {!this.state.itemName && !this.state.formValid && (
                <ValidationMessage message={"Item Name Required"} />
              )}

              <label>Description</label>
              <textarea
                onChange={this.handleChange}
                className={`${
                  !this.state.description && !this.state.formValid
                    ? "edit-inventory__input--missing"
                    : "edit-inventory__input"
                }`}
                placeholder="Please enter a brief item description"
                name="description"
                value={`${this.state.description}`}
              />
              {!this.state.description && !this.state.formValid && (
                <ValidationMessage message={"Description Required"} />
              )}

              <label>Category</label>
              <select
                onChange={this.handleChange}
                className={`${
                  !this.state.category && !this.state.formValid
                    ? "edit-inventory__input--missing"
                    : "edit-inventory__input"
                }`}
                placeholder="Please select"
                name="category"
                value={`${this.state.category}`}
              >
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

            <div className="edit-inventory__item-availablity">
              <h2 className="edit-inventory__section-header">
                Item Availablity
              </h2>

              <label>Status</label>
              <fieldset className="edit-inventory__in-stock" id="status">
                <input
                  onChange={this.handleChange}
                  type="radio"
                  value="In Stock"
                  name="status"
                  checked={this.state.status === "In Stock"}
                />

                <label>In Stock</label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  value="Out Of Stock"
                  name="status"
                  checked={this.state.status === "Out Of Stock"}
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
                        ? "edit-inventory__quantity edit-inventory__input--missing"
                        : "edit-inventory__quantity edit-inventory__input"
                    }`}
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                  />
                  {this.state.quantity < 0 && (
                    <ValidationMessage
                      message={"Quantity cannot be less than zero"}
                    />
                  )}
                </>
              )}
              {this.state.quantity === 0 &&
                this.state.status === "true" &&
                !this.state.formValid && (
                  <ValidationMessage message={"Quantity Required"} />
                )}
              <label>Warehouse</label>
              <select
                onChange={this.handleChange}
                className={`${
                  !this.state.category && !this.state.formValid
                    ? "edit-inventory__input--missing"
                    : "edit-inventory__input"
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
                <ValidationMessage message={"Warehouse Required"} />
              )}
            </div>
          </div>

          <div className="edit-inventory__buttons">
            <Link className="edit-inventory__cancel-link" to="/inventory">
              <button className="edit-inventory__cancel">Cancel</button>
            </Link>
            <button type="submit" className="edit-inventory__add">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
