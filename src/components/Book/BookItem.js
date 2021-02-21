import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookItem.css";

const BookItem = ({ book }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={12} md={6} lg={3}>
        <Card id="card">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">More info</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BookItem;
