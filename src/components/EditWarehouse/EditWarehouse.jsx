import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./edit-warehouse.scss";
import axios from "axios";
import arrow from "../../assets/icons/arrow-back-24px.svg";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";

export default class EditWarehouse extends Component {
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

  getWarehouseData = () => {
    axios
      .get(
        `http://localhost:8080/warehouses/${this.props.match.params.warehouseId}`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          warehouseName: response.data.name,
          streetAdress: response.data.address,
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
    // axios
    //   .get(
    //     `http://localhost:8080/warehouses/${this.props.match.params.warehouseId}`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       warehouseName: response.data.name,
    //       streetAdress: response.data.address,
    //       city: response.data.city,
    //       country: response.data.country,
    //       contactName: response.data.contact.name,
    //       position: response.data.contact.position,
    //       phoneNumber: response.data.contact.phone,
    //       email: response.data.contact.email,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // I LEFT THIS HERE FOR YOU TO SEE BUT YOU CAN DELETE, ITS NOW IN THE FUNCTION ABOVE
  }

  handleCancel = () => {
    this.getWarehouseData();
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
        .post(
          `http://localhost:8080/warehouses/${this.props.match.params.warehouseId}`,
          {
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
          }
        )
        .then(function (response) {
          event.target.reset();
          alert(`Warehouse eddited successfully`);
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
          <Link to={`/warehouses`} className="add-warehouse__back">
            <img src={arrow} alt="" />
          </Link>
          Edit Warehouse
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
                value={`${this.state.warehouseName}`}
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
                value={`${this.state.streetAdress}`}
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
                value={`${this.state.city}`}
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
                value={`${this.state.country}`}
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
                value={`${this.state.contactName}`}
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
                value={`${this.state.position} `}
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
                value={`${this.state.phoneNumber}`}
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
                value={`${this.state.email}`}
                name="email"
              />
              {!this.state.warehouseName && !this.state.formValid && (
                <ValidationMessage />
              )}
            </div>
          </div>

          <div className="add-warehouse__buttons">
            <button
              type="reset"
              className="add-warehouse__cancel"
              onClick={this.handleCancel}
            >
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
