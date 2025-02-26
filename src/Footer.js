import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src="/Logo.svg" alt="Little Lemon Logo" />
      </div>
      
      <div className="footer-links">
      <h4>Nav</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className="footer-address">
        <h4>Address</h4>
        <p>123 Flavor Street</p>
        <p>Chicago, IL 60601</p>
        <p>+1 (312) 555-7890</p>
      </div>

      <div className="footer-social">
      <h4>Follow Us</h4>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
