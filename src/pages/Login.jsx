import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Icon } from "../helper/Icons";

const Login = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center bg-gray"
      style={{
        background:
          "url(https://colorlib.com/etc/regform/colorlib-regform-12/images/body-bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "100%",
      }}
    >
      <Row>
        <Col className="d-none d-md-block bg-primary p-5">
          <Icon name="register" />
        </Col>
        <Col className="p-5 bg-light">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="info" type="submit" className="w-75">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
