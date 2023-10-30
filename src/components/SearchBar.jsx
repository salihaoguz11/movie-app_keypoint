import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, getData } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    navigate("/");
    setSearch("");
  };

  return (
    <Form className="mx-auto my-auto w-50" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormGroup as={Col} md="9">
          <Form.Control
            placeholder="Search a movie, celebrity, or a Tv show  "
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            autoFocus
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
