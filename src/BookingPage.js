import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ submitForm }) => {
  return (
    <div className="booking-page">
      <h2>Book Your Reservation</h2>
      <BookingForm submitForm={submitForm} /> {/* Pass submitForm as prop */}
    </div>
  );
};

export default BookingPage;
