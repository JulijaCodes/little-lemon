import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import "./BookingForm.css";


const initialTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM"];

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initialTimes; // Replace with logic to update times based on date
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Book your table at Little Lemon and enjoy a great dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Link to="/">
      </Link>
    </div>
  );
};

export default BookingPage;
