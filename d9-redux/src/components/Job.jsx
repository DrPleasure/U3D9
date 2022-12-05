import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button
          variant="success"
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVES",
              payload: [data.company_name],
            });
          }}
          className="ml-3"
        >
          <FaStar style={{ fontSize: "15px" }} />
        </Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
