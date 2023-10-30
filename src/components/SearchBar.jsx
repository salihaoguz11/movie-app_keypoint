import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";

const SearchBar = () => {
  //get the values from context
  const { search, setSearch, getData } = useContext(Context);
  const navigate = useNavigate();

  //function to handle form submision either click or enter
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    //naviage to home page
    navigate("/");
    //clear the search field
    setSearch("");
  };

  return (
    <Form className="mx-auto my-4 w-50" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormGroup as={Col} xs="9" md="8">
          <Form.Control
            placeholder="Search a movie, celebrity, or a Tv show  "
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            //automatacally focus on the search field
            autoFocus
          />
        </FormGroup>
        <FormGroup
          as={Col}
          xs="3"
          md="4"
          className="d-flex justify-content-center "
        >
          <button type="submit" className="btn btn-warning ">
            Search
          </button>
        </FormGroup>
      </Row>
    </Form>
  );
};

export default SearchBar;
