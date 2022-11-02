import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const Films = () => {
  const [film, setFilms] = React.useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/v1/films/${id}`
        );
        console.log(data);

        setFilms(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h2 className="mb-3">{film.name}</h2>

      <Row>
        {loading && "Загрузка..."}

        <Col xs="12" md="6" lg="4" xl="3">
          <Image src={film.image} alt={`${film.name} постер`} />
        </Col>
        <Col xs="12" md="6" lg="4" xl="3">
          <h5 className="fw-bold">Жанры</h5>
          <p>{film.genres}</p>
          <h5 className="fw-bold">Сюжет</h5>
          <p>{film.description}</p>
          <h5 className="fw-bold">Страна производства</h5>
          <p>{film.country}</p>
          <h5 className="fw-bold">Год релиза</h5>
          <p>{film.year}</p>
        </Col>
      </Row>
    </>
  );
};

export default Films;
