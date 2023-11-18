import React from "react";
import { Button } from "../../generic-components/button/Button";
import { Container } from "../../generic-components/container/Container";

export const CartItem = ({ item, handleClick }) => {
  return (
    <Container className="product-name">
      <img src={item?.image} alt="" className="product-image" />
      <Container>{item?.title.slice(0, 10)}...</Container>
      <Container>{item?.price} $</Container>
      <Button onClick={() => handleClick(item.id)}>Remove from Cart</Button>
    </Container>
  );
};
