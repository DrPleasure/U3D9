import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { getJobsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const favesLength = useSelector(
    (store) => store.favourites.favourites.list.length
  );
  const dispatch = useDispatch();
  let jobs = useSelector((state) => state.jobs.jobs);

  const loadingData = useSelector((state) => state.jobs.isLoading);
  const errorLoading = useSelector((state) => state.jobs.isError);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const limit = "&limit=20";

  const endPoint = baseEndpoint + query + limit;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(endPoint));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search Engine</h1>

          {loadingData && (
            <Spinner animation="border" variant="info" className="ml-2 mt-5" />
          )}
          <Link to="/favourites">
            <Button variant="primary">Favorites</Button>{" "}
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
