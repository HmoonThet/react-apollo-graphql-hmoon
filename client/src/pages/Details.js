import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PERSON_WITH_CARS } from "../graphql/queries";
import CarCard from "../components/listItems/CarCard";
import { Col, Row, Typography } from "antd";
import "./Details.css";

const { Title } = Typography;

const Details = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { personId: id },
    pollInterval: 500,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const { firstName, lastName, cars } = data.personWithCars;

  return (
    <div className="details-page-container">
      <div>
        <Title level={2}>
          {firstName} {lastName}
        </Title>
      </div>
      <Row gutter={[16, 16]} className="cars-details">
        {cars.map((car, index) => (
          <Col span={8} key={index}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
      <Link to="/" className="back-to-home-button">
        Back to Home
      </Link>
    </div>
  );
};

export default Details;
