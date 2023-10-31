import { useRef, useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Icon } from "../helper/Icons";

const Login = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  console.log(user);
  //create a ref for the form
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //send user details to the session storage
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/main");
    //clear the form fields using the ref
    formRef.current.reset();
    // setUser({ email: "", password: "" }); didnt work well,
    //when go to different component, user disappears
  };
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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required // Make the password field required.
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // When the user types in the password input, update the 'password' field of the 'user' object.
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                minLength={7} // Enforce a minimum password length of 7 characters.
              />
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
