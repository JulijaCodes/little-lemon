import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { store } from "./api";

function App() {
  const navigate = useNavigate();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

 
  store();

  const submitForm = (success) => {
    if (success) {
      setIsBookingConfirmed(true);
      navigate("/confirmed-booking");
    } else {
      alert("The selected time is already booked, please choose another time.");
    }
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage submitForm={submitForm} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;