import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import errorImg from "../helper/img/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex  flex-column  justify-content-center align-items-center  min-vh-100 text-center mt-4 mb-10 ">
      <Row className="">
        <Col>
          <Image className="m-0" src={errorImg} alt="NotFound" fluid />
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Button
            variant="success"
            className="w-100 px-4 py-2"
            onClick={() => navigate("/main")}
          >
            Home
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            variant="warning"
            className="w-100 px-6 py-2"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
