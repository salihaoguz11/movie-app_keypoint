import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/Context";
import SearchBar from "../components/SearchBar";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import axios from "axios";

const Detail = () => {
  const [detail, setDetail] = useState("");
  const { id, media_type } = useParams();
  const { API_KEY, IMG_URL } = useContext(Context);
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  // Fetch details for the selected item using Axios
  const getDetails = async () => {
    const { data } = await axios(movieDetailBaseUrl);

    setDetail(data);
    console.log(data);
  };

  // Fetch details when the component mounts
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <Container fluid className="py-4">
        <SearchBar />
        <div>
          <Container className="d-flex justify-content-center bg-dark text-light   ">
            <Row className="rounded-lg  shadow-lg max-w-6xl">
              <Col lg={4} className="p-0">
                <Image
                  className="rounded-lg h-100 w-100 object-cover"
                  src={
                    // Check if there's a poster path; if not, use profile path; if neither exists, use default image
                    detail.poster_path
                      ? IMG_URL + detail.poster_path
                      : detail.profile_path
                      ? IMG_URL + detail.profile_path
                      : defaultImage
                  }
                  alt="poster"
                />
              </Col>
              <Col className="p-5 d-flex flex-column justify-content-between ">
                <div>
                  <h2 className="text-center text-warning display-4">
                    {detail.title || detail.name}
                  </h2>
                  <h5 className="text-info font-weight-bold mb-2">Overview</h5>
                  <p className="text-gray mb-1">
                    {detail.overview ? detail.overview : "Not Found"}
                  </p>
                </div>
                <ListGroup>
                  <ListGroup.Item variant="dark" className="rounded-t-lg ">
                    {media_type === "person"
                      ? // Display the department a person is known for
                        `Known for:${detail.known_for_department}`
                      : // Display the release date or first air date for other media types
                        `Release Date:${
                          detail.release_date || detail.first_air_date
                        }`}
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    {" "}
                    {media_type === "person"
                      ? `Birthday:${detail.birthday}`
                      : `Rate : ${detail.vote_average}`}
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    {media_type === "person"
                      ? `Popularity:${detail.popularity}`
                      : ` Total Vote :  ${detail.vote_count}`}
                  </ListGroup.Item>
                  <ListGroup.Item className="rounded-t-lg" variant="dark">
                    <Link
                      to={-1}
                      className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                    >
                      Go Back
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
