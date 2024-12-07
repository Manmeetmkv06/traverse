
import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = ({ onSearch }) => {
  const locationRef = useRef("");
  const minPriceRef = useRef("");
  const maxPriceRef = useRef("");
  const minDistanceRef = useRef("");
  const maxDistanceRef = useRef("");

  const SearchHandler = (e) => {
    e.preventDefault();
    const searchCriteria = {
      location: locationRef.current.value,
      minPrice: minPriceRef.current.value,
      maxPrice: maxPriceRef.current.value,
      minDistance: minDistanceRef.current.value,
      maxDistance: maxDistanceRef.current.value,
    };
    onSearch(searchCriteria);
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4" onSubmit={SearchHandler}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where do you plan to go?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-money-dollar-circle-line"></i>
            </span>
            <div>
              <h6>Min Price ($)</h6>
              <input type="number" placeholder="Min Price" ref={minPriceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-money-dollar-circle-line"></i>
            </span>
            <div>
              <h6>Max Price ($)</h6>
              <input type="number" placeholder="Max Price" ref={maxPriceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Min Distance (KM)</h6>
              <input
                type="number"
                placeholder="Min Distance"
                ref={minDistanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Max Distance (KM)</h6>
              <input
                type="number"
                placeholder="Max Distance"
                ref={maxDistanceRef}
              />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={SearchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
