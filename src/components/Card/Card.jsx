import React, { useContext, useEffect, useState } from "react";
import "./Card-style.css";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomModal } from "../CustomModal/CustomModal";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  let navigate = useNavigate();

  const addNewItem = () => {
    navigate("../add", { replace: false });
  };

  const deleteItem = () => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    props.updateVote(items);
  };

  const upVote = (item) => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.map(function (element) {
      if (element.name == item.name) {
        element.vote++;
        //element.time = new Date().getTime();
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
    props.updateVote(items);
  };

  const downVote = (item) => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.map(function (element) {
      if (element.name == item.name) {
        element.vote--;
        //element.time = new Date().getTime();
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
    props.updateVote(items);
  };

  return (
    <div className={`card-list ${props.header ? "card-list-bg" : ""}`}>
      <Container>
        <Row>
          <Col xs={3}>
            <CustomButton
              disabled={props.disabled}
              title={
                props.disabled
                  ? `${props.buttonValue} POINTS`
                  : props.buttonValue
              }
              onClick={addNewItem}
            ></CustomButton>
          </Col>
          <Col xs={9} className={props.header ? "center-header" : ""}>
            {props.header ? (
              <h5 className="add-text">SUBMIT A LINK</h5>
            ) : (
              <>
                <p className="card-item--name">{props.item.name}</p>
                <p className="card-item--url">({props.item.url})</p>
                <Row>
                  <Col>
                    <button
                      className="vote-btn"
                      onClick={() => upVote(props.item)}
                    >
                      &#8593; Up Vote
                    </button>
                  </Col>
                  <Col>
                    <button
                      className="vote-btn"
                      onClick={() => downVote(props.item)}
                    >
                      &#8595; Down Vote
                    </button>
                  </Col>
                  <Col>
                    <CustomModal
                      item={props.item}
                      onClick={deleteItem}
                    ></CustomModal>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
