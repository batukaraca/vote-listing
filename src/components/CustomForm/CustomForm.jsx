import React, { useReducer, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const CustomForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useReducer(formReducer, {
    vote: 0,
    time: new Date().getTime(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let items = JSON.parse(localStorage.getItem("items")) || [];
    if (
      items.filter((item) => item.name === formData.name).length > 0 ||
      items.filter((item) => item.url === formData.url).length > 0
    ) {
      toast.error("Duplicated Link");
    } else {
      items.push(formData);
      localStorage.setItem("items", JSON.stringify(items));
      toast.success(`${formData.name} Added`);
      navigate("../", { replace: true });
    }
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Link Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="e.g. Alphabet"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Link Url</Form.Label>
        <Form.Control
          type="url"
          name="url"
          placeholder="e.g. http://abc.xyz"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
