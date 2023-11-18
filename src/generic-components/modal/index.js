import React from "react";
import { Button } from "../button/Button";

export const Modal = ({ closeModal, children, formHeader }) => {
  const handleClick = () => {
    closeModal();
  };
  return (
    <div className="modal open">
      <div className="modal-content">
        <div className="modal-header">
          <div className="form-header">{formHeader}</div>
          <Button className="close-button" onClick={handleClick}>
            X
          </Button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
