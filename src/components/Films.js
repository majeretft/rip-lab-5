import React, { useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = React.useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/v1/films/");
        console.log(data);

        setFilms(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading && "Загрузка..."}

      <Row>
        {films.map((el) => (
          <Col key={el.id} xs="12" sm="6" md="6" lg="4" xl="3">
            <Card>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title className="text-center">{el.name}</Card.Title>
                <Card.Text className="text-center">{el.description}</Card.Text>
                <Button
                  as={Link}
                  to={`/films/${el.id}`}
                  variant="outline-primary"
                >
                  Купить билет
                </Button>{" "}
                <Button
                  as={Link}
                  to={`/films/about/${el.id}`}
                  variant="outline-secondary"
                >
                  Подробнее
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Films;
