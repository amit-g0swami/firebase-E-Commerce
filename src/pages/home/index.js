import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome</h1>
        <Link to="/products">
          <button variant="outlined">Explore Now</button>
        </Link>
      </header>
    </div>
  );
};
