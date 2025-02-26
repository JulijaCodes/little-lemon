import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./api";
import "./BookingForm.css";

const BookingForm = ({ submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    fetchAvailableTimes(today);
  }, []);

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      console.log("Fetched times:", times);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = await submitAPI(formData);
    submitForm(success);
  };


  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    fetchAvailableTimes(selectedDate);
  };


  const handleGuestsChange = (e) => {
    const numGuests = parseInt(e.target.value, 10);
    setGuests(numGuests);
  };

  useEffect(() => {
    const isValid = date && time && guests >= 1 && guests <= 10 && occasion;
    setIsFormValid(isValid);
  }, [date, time, guests, occasion]);

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        min={new Date().toISOString().split("T")[0]}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {availableTimes.length > 0 ? (
          availableTimes.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))
        ) : (
          <option value="">No times available</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleGuestsChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
