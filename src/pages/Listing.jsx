import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Form } from "react-bootstrap";

export const Listing = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [selection, setSelection] = useState(0);

  useEffect(() => {}, [items, selection]);

  const changeSorting = (childItems) => {
    setItems(childItems);
  };

  const handleLangChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <Card disabled={false} header={true} buttonValue={"+"}></Card>
      <div className="border-line"></div>
      <Form.Select
        className="select-input"
        onChange={handleLangChange}
        defaultValue={0}
      >
        <option value={0}>Created Time</option>
        <option value={1}>Most Voted</option>
        <option value={2}>Less Voted</option>
      </Form.Select>
      {items
        .sort((a, b) => {
          switch (selection) {
            case "0":
              return b.time - a.time;
            case "1":
              if (b.vote != a.vote) return b.vote - a.vote;
              else return b.time - a.time;
            case "2":
              if (a.vote != b.vote) return a.vote - b.vote;
              else return a.time - b.time;
          }
        })
        .map((item) => (
          <Card
            key={item.name}
            disabled={true}
            header={false}
            buttonValue={item.vote}
            item={item}
            updateVote={changeSorting}
          ></Card>
        ))}
    </div>
  );
};
