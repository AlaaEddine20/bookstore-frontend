import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookItem.css";

const BookItem = ({ book }) => {
  return (
    <Col sm={12} md={6} lg={3}>
      <Card id="card">
        <div>
          <Card.Img id="card-img" variant="top" src={book.img} />
        </div>
        <Card.Body>
          <div className="info">
            <div>
              <h6>{book.category}</h6>
            </div>
            <Button id="card-btn" variant="warning">
              More info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookItem;
