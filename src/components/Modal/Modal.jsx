import React from "react";
import "./modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

const Modal = ({ onClose, show, objectID, getData, objectName, type }) => {
  // FUNCTION TO DELETE WAREHOUSE FROM API
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

  // FUNCTION TO DELETE INVENTORY FROM API
  const deleteInventoryAPI = async (id) => {
    try {
      const deletedInventory = await axios.delete(
        `http://localhost:8080/inventory/${id}`
      );
      getData();
      console.log(deletedInventory);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    console.log(objectID, "objectID through props");
    if (type === "warehouse") {
      deleteWarehouseAPI(objectID);
    } else if (type === "inventory") {
      deleteInventoryAPI(objectID);
    }
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
          {type === "warehouse" ? (
            <h1 className="modal__title">{`Delete ${objectName} ${type}?`}</h1>
          ) : null}
          {type === "inventory" ? (
            <h1 className="modal__title">{`Delete ${objectName} ${type} item?`}</h1>
          ) : null}
        </div>
        {type === "warehouse" ? (
          <article className="modal__content">
            {`Please confirm that you'd like to delete the ${objectName} from the list of ${type}s. You won't be able to undo this action.`}
          </article>
        ) : null}
        {type === "inventory" ? (
          <article className="modal__content">
            {`Please confirm that you'd like to delete ${objectName} from the ${type} list. You won't be able to undo this action.`}
          </article>
        ) : null}
        <div className="modal__footer">
          <button onClick={onClose} className="modal__cancel">
            Cancel
          </button>
          <button onClick={deleteHandler} className="modal__delete">
            Delete
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Modal;
