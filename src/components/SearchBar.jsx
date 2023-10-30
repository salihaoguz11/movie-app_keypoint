import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import { Context } from "../context/Context";

const SearchBar = () => {
  const { search, setSearch } = useContext(Context);

  return (
    <Form className="mx-auto my-5 w-50">
      <Row className="mb-3">
        <FormGroup as={Col} md="9">
          <Form.Control
            placeholder="Search a movie"
            type="search"
            // onChange={(e) => setSearch(e.target.value)}
            // value={search}
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
