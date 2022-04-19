import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomForm } from "../components/CustomForm/CustomForm";

export const Additem = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/" className="back-btn">
            {" "}
            &#8592; Return to List
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="add-header">Add New Link</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomForm></CustomForm>
        </Col>
      </Row>
    </Container>
  );
};
