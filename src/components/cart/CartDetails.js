import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShippingAddress } from "../../redux/actions/auth-action";
import { GetAddress } from "../get-address-form";
import { Button } from "../../generic-components/button/Button";
import { Container } from "../../generic-components/container/Container";

export const CartDetails = ({ cart, uid }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  const getAddress = () => {
    dispatch(getShippingAddress(uid));
    setTimeout(() => {
      setModalOpen(!modalOpen);
    }, [300]);
  };
  return (
    <Container>
      <Container className="cart-total">
        <Container className="row">
          <Container>Cart Total:</Container>
          <Container>{cartTotal} $</Container>
        </Container>
      </Container>
      <Container className="checkout">
        <Button onClick={() => getAddress()}>Check-out</Button>
      </Container>
      {modalOpen === true && (
        <GetAddress
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          formHeader="Submit Address"
        />
      )}
    </Container>
  );
};
