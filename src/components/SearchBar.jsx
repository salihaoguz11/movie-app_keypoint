import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="m-4">
      <Row className="mb-3">
        <FormGroup as={Col} md="9">
          <Form.Control
            placeholder="Search Player..."
            type="search"
            autoFocus

            // onChange={(e) => setSearch(e.target.value)}
          />
        </FormGroup>
        <FormGroup as={Col} md="3">
          <button type="submit" className="btn btn-warning ">
            Search
          </button>
        </FormGroup>
      </Row>
    </Form>
  );
};

export default SearchBar;
