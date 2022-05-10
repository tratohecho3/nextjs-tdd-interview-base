import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Card } from "react-bootstrap";

const CardBody = (props) => {
  const { image, name } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBody;
