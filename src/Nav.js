import React from "react";
import "./App.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img src="/Logo.svg" alt="Logo" className="logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
