import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteItem = (item) => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.map(function (element, index) {
      if (element.name == item.name) {
        items.splice(index, 1);
        toast.success(`${item.name} Deleted`);
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
    props.onClick();
    setShow(false);
  };
  return (
    <>
      <button onClick={handleShow} className="delete-btn">
        🗑
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Link</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h4>Do you want to remove:</h4>
          <h3>{props.item.name}</h3>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            className="mt-10"
            onClick={() => deleteItem(props.item)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
