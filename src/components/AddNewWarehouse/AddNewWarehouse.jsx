import React, { Component } from "react";
import "./add-new-warehouse.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";

export default class AddNewWarehouse extends Component {
  state = {
    warehouseName: null,
    streetAdress: null,
    city: null,
    country: null,
    contactName: null,
    position: null,
    phoneNumber: null,
    email: null,
    formValid: true,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (
      !this.state.warehouseName ||
      !this.state.streetAdress ||
      !this.state.city ||
      !this.state.country ||
      !this.state.contactName ||
      !this.state.position ||
      !this.state.phoneNumber ||
      !this.state.email
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post(`http://localhost:8080/warehouses`, {
          name: event.target.warehouseName.value,
          address: event.target.streetAdress.value,
          city: event.target.city.value,
          country: event.target.country.value,
          contact: {
            name: event.target.contactName.value,
            position: event.target.position.value,
            phone: event.target.phoneNumber.value,
            email: event.target.email.value,
          },
        })
        .then(function (response) {
          event.target.reset();
          alert(`Warehouse added successfully`);
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
      <div className="add-warehouse">
        <h1 className="add-warehouse__header">
          <span className="add-warehouse__back">
            <img src={arrow} alt="" />
          </span>
          Add New Warehouse
        </h1>
        <form
          name="addWarehouse"
          onSubmit={this.handleSubmit}
          className="add-warehouse__form"
        >
          <div className="add-warehouse__form-elements">
            <div className="add-warehouse__warehouse-info">
              <h2 className="add-warehouse__section-header">
                Warehouse Details
              </h2>
              <label>Warehouse Name</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.warehouseName && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Warehouse Name"
                name="warehouseName"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Street Adress</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.streetAdress && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Street Adress"
                name="streetAdress"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>City</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.city && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="City"
                name="city"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Country</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.country && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Country"
                name="country"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
            </div>

            <div className="add-warehouse__contact-info">
              <h2 className="add-warehouse__section-header">Contact Details</h2>
              <label>Contact Name </label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.contactName && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Contact Name"
                name="contactName"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Position</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.position && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Position"
                name="position"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Phone Number</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.phoneNumber && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Phone Number"
                name="phoneNumber"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
              <label>Email</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.email && !this.state.formValid
                    ? "add-warehouse__input--missing"
                    : "add-warehouse__input"
                }`}
                placeholder="Email"
                name="email"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
            </div>
          </div>

          <div className="add-warehouse__buttons">
            <button type="reset" className="add-warehouse__cancel">
              Cancel
            </button>
            <button type="submit" className="add-warehouse__add">
              +Add Warehouse
            </button>
          </div>
        </form>
      </div>
    );
  }
}
