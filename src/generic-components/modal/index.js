import React from "react";

export const Modal = ({ closeModal, children, formHeader }) => {
  const handleClick = () => {
    closeModal();
  };
  return (
    <div className="modal open">
      <div className="modal-content">
        <div className="modal-header">
          <div className="form-header">{formHeader}</div>
          <button className="close-button" onClick={handleClick}>
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
