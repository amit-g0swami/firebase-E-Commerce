import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressForm } from "../../components/profile/AddressForm";
import { UserDetails } from "../../components/profile/UserDetails";
import { getShippingAddress } from "../../redux/actions/auth-action";

export const Profile = () => {
  const dispatch = useDispatch();
  const { user, shippingAddress } = useSelector((state) => state.auth);
  const fetchShippingAddress = () => {
    dispatch(getShippingAddress(user.uid));
  };
  return (
    <div>
      <div className="row">
        <UserDetails user={user} />
      </div>
      <AddressForm address={shippingAddress} />
      <div>
        <button onClick={() => fetchShippingAddress()}>Show Address</button>
      </div>
    </div>
  );
};
