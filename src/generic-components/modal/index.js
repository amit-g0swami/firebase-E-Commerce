import React, { useRef } from "react";
import { Button } from "../button/Button";
import { useClickOutside } from "../../hooks/useClickOutSide";

export const Modal = ({ closeModal, children, formHeader }) => {
  const handleClick = () => {
    closeModal();
  };
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);
  return (
    <div className="modal open" ref={modalRef}>
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
