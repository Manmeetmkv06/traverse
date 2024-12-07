

import React, { useState } from "react";
import "../styles/tours.css";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/Tourcard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import tourData from "../assets/data/tours";

const Tours = () => {
  const [filteredTours, setFilteredTours] = useState(tourData);

  const handleSearch = (criteria) => {
    const { location, minPrice, maxPrice, minDistance, maxDistance } = criteria;

    const results = tourData.filter((tour) => {
      const matchesLocation = location
        ? tour.city.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesPrice =
        (!minPrice || tour.price >= parseFloat(minPrice)) &&
        (!maxPrice || tour.price <= parseFloat(maxPrice));
      const matchesDistance =
        (!minDistance || tour.distance >= parseFloat(minDistance)) &&
        (!maxDistance || tour.distance <= parseFloat(maxDistance));

      return matchesLocation && matchesPrice && matchesDistance;
    });

    setFilteredTours(results);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar onSearch={handleSearch} />
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container>
          <Row>
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <Col lg="3" key={tour.id} className="mb-4">
                  <TourCard tour={tour} />
                </Col>
              ))
            ) : (
              <Col lg="12">
                <h4 className="text-center">No tours found</h4>
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
