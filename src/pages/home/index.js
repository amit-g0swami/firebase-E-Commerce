import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Button } from "../../generic-components/button/Button";
import { Container } from "../../generic-components/container/Container";

export const Home = () => {
  return (
    <Container className="home">
      <Container className="hero">
        <h1>Welcome</h1>
        <Link to="/products">
          <Button>Explore Now</Button>
        </Link>
      </Container>
    </Container>
  );
};
