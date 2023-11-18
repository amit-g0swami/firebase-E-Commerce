import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressForm } from "../../components/profile/AddressForm";
import { UserDetails } from "../../components/profile/UserDetails";
import { getShippingAddress } from "../../redux/actions/auth-action";
import { Button } from "../../generic-components/button/Button";
import { Container } from "../../generic-components/container/Container";

export const Profile = () => {
  const dispatch = useDispatch();
  const { user, shippingAddress } = useSelector((state) => state.auth);
  const fetchShippingAddress = () => {
    dispatch(getShippingAddress(user.uid));
  };
  return (
    <Container>
      <Container className="row">
        <UserDetails user={user} />
      </Container>
      <AddressForm address={shippingAddress} />
      <Container>
        <Button onClick={() => fetchShippingAddress()}>Show Address</Button>
      </Container>
    </Container>
  );
};
