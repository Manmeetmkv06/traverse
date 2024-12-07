
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Thankyou.css";

const Thankyou = () => {
  const navigate = useNavigate();

  const handleCancelBooking = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/cancel`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        // No need to pass extra data as backend uses the fullname from the latest booking automatically
      });

      if (response.ok) {
        alert("Booking canceled successfully, email sent");
        navigate("/home");
      } else {
        alert("Failed to cancel booking.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while canceling the booking.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your Tour is booked</h3>
              <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
              </Button>
              <Button
                className="btn primary__btn w-25 mt-3"
                onClick={handleCancelBooking}
              >
                Cancel Booking
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Thankyou;
