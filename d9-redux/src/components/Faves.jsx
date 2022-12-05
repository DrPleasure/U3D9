import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Faves = () => {
  const favourites = useSelector((state) => state.favourites.favourites.list);
  const dispatch = useDispatch();
  return (
    <Container className="flex-column align-items-center text-center">
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((job, i) => (
              <li key={i} className="my-4">
                <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                <p>{job.title}</p>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVES",
                      payload: i,
                    });
                  }}
                >
                  <FaTrash />
                </Button>
              </li>
            ))}
          </ul>
          <Link to="/">
            <Button>Take me back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Faves;
