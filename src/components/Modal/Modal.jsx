import React from "react";
import "./modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

const Modal = ({ onClose, show, warehouseID, getData }) => {
  // FUNCTION TO DELETE COMMENT FROM API
  const deleteWarehouseAPI = async (id) => {
    try {
      const deletedWarehouse = await axios.delete(
        `http://localhost:8080/warehouses/${id}`
      );
      getData();
      console.log(deletedWarehouse);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const deleteWarehouseHandler = (event) => {
    event.preventDefault();
    console.log(warehouseID, "warehouseId through props");
    deleteWarehouseAPI(warehouseID);

    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <aside className="modal" onClick={onClose}>
      <section
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close">
          <img
            className="modal__icon"
            src={closeIcon}
            alt="close icon"
            onClick={onClose}
          />
        </div>
        <div className="modal__header">
          <h1 className="modal__title">Delete THIS THING</h1>
        </div>
        <article className="modal__content">
          Please confirm that you’d like to delete the THIS from the list of
          THING + S. You won’t be able to undo this action.
        </article>
        <div className="modal__footer">
          <button onClick={onClose} className="modal__cancel">
            Cancel
          </button>
          <button onClick={deleteWarehouseHandler} className="modal__delete">
            Delete
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Modal;
