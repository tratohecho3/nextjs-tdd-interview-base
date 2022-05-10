import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Card } from "react-bootstrap";

const CardBody = (props) => {
  const { image, name, id } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <a href={id}>
        <Card.Title>{name}</Card.Title>
        </a>
        
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBody;
