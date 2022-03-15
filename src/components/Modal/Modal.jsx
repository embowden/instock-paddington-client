import React from "react";
import "./modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

const Modal = () => {
  return (
    <aside className="modal">
      <section className="modal__container">
        <div className="modal__close">
          <img className="modal__icon" src={closeIcon} alt="close icon" />
        </div>
        <div className="modal__header">
          <h1 className="modal__title">Delete THIS THING</h1>
        </div>
        <article className="modal__content">
          Please confirm that you’d like to delete the THIS from the list of
          THING + S. You won’t be able to undo this action.
        </article>
        <div className="modal__footer">
          <button className="modal__cancel">Cancel</button>
          <button className="modal__delete">Delete</button>
        </div>
      </section>
    </aside>
  );
};

export default Modal;
