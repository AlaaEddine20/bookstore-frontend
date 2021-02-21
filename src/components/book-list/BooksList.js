import axios from "axios";
import React, { useState, useEffect } from "react";
import BookItem from "../Book/BookItem";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BooksList.css";

function Books() {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://strive-bookstore.herokuapp.com/books"
        );
        setIsLoading(false);
        setBooks(res.data);
        console.log("FETCHING DATA: ", res.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    books && (
      <>
        {isLoading ? (
          <div>Loading..</div>
        ) : (
          <Container id="book-list">
            <Row>
              {books.data.map((book, idx) => (
                <BookItem key={idx} book={book} title={book.title} />
              ))}
            </Row>
          </Container>
        )}
      </>
    )
  );
}

export default Books;
