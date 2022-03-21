import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./edit-warehouse.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default class EditWarehouse extends Component {
  state = {
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
    formValid: true,
  };

  getWarehouseData = () => {
    axios
      .get(
        `http://localhost:8080/warehouses/${this.props.match.params.warehouseId}`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          warehouseName: response.data.name,
          streetAddress: response.data.address,
          city: response.data.city,
          country: response.data.country,
          contactName: response.data.contact.name,
          position: response.data.contact.position,
          phoneNumber: response.data.contact.phone,
          email: response.data.contact.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getWarehouseData();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (
      this.state.warehouseName === "" ||
      this.state.streetAddress === "" ||
      this.state.city === "" ||
      this.state.country === "" ||
      this.state.contactName === "" ||
      this.state.position === "" ||
      this.state.phoneNumber === "" ||
      this.state.email === ""
    ) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post(
          `http://localhost:8080/warehouses/${this.props.match.params.warehouseId}`,
          {
            name: event.target.warehouseName.value,
            address: event.target.streetAddress.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact: {
              name: event.target.contactName.value,
              position: event.target.position.value,
              phone: event.target.phoneNumber.value,
              email: event.target.email.value,
            },
          }
        )
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Warehouse has been succesfully updated!",
            confirmButtonColor: "#2e66e5",
          });
          this.props.history.push("/warehouses");
        });
    } else {
      this.setState({
        formValid: false,
      });
    }
  };

  render() {
    return (
      <div className="edit-warehouse">
        <h1 className="edit-warehouse__header">
          <Link to={`/warehouses`} className="edit-warehouse__back">
            <img src={arrow} alt="" />
          </Link>
          Edit Warehouse
        </h1>
        <form
          name="addWarehouse"
          onSubmit={this.handleSubmit}
          className="edit-warehouse__form"
        >
          <div className="edit-warehouse__form-elements">
            <div className="edit-warehouse__warehouse-info">
              <h2 className="edit-warehouse__section-header">
                Warehouse Details
              </h2>
              <label>Warehouse Name</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.warehouseName && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.warehouseName}`}
                name="warehouseName"
              />
              {this.state.warehouseName === "" && !this.state.formValid && (
                <ValidationMessage message={"Warehouse name Required"} />
              )}
              <label>Street Address</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.streetAdress && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.streetAddress}`}
                name="streetAddress"
              />
              {this.state.streetAddress === "" && !this.state.formValid && (
                <ValidationMessage message={"Street Address Required"} />
              )}
              <label>City</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.city && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.city}`}
                name="city"
              />
              {this.state.city === "" && !this.state.formValid && (
                <ValidationMessage message={"City Required"} />
              )}
              <label>Country</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.country && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.country}`}
                name="country"
              />
              {this.state.country === "" && !this.state.formValid && (
                <ValidationMessage message={"Country Required"} />
              )}
            </div>

            <div className="edit-warehouse__contact-info">
              <h2 className="edit-warehouse__section-header">
                Contact Details
              </h2>
              <label>Contact Name </label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.contactName && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.contactName}`}
                name="contactName"
              />
              {this.state.contactName === "" && !this.state.formValid && (
                <ValidationMessage message={"Contact Name Required"} />
              )}
              <label>Position</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.position && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.position}`}
                name="position"
              />
              {this.state.position === "" && !this.state.formValid && (
                <ValidationMessage message={"Position Required"} />
              )}
              <label>Phone Number</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.phoneNumber && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.phoneNumber}`}
                name="phoneNumber"
              />
              {this.state.phoneNumber === "" && !this.state.formValid && (
                <ValidationMessage message={"Phone Number Required"} />
              )}
              <label>Email</label>
              <input
                onChange={this.handleChange}
                className={`${
                  !this.state.email && !this.state.formValid
                    ? "edit-warehouse__input--missing"
                    : "edit-warehouse__input"
                }`}
                value={`${this.state.email}`}
                name="email"
              />
              {this.state.email === "" && !this.state.formValid && (
                <ValidationMessage message={"Email Required"} />
              )}
            </div>
          </div>

          <div className="edit-warehouse__buttons">
            <Link className="add-warehouse__cancel-link" to="/warehouses">
              <button className="add-warehouse__cancel">Cancel</button>
            </Link>
            <button type="submit" className="edit-warehouse__add">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
