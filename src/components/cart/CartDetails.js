import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShippingAddress } from "../../redux/actions/auth-action";
import { GetAddress } from "../get-address-form";

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
    <div>
      <div className="cart-total">
        <div className="row">
          <div>Cart Total:</div>
          <div>{cartTotal} $</div>
        </div>
      </div>
      <div className="checkout">
        <button onClick={() => getAddress()}>Check-out</button>
      </div>
      {modalOpen === true && (
        <GetAddress
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          formHeader="Submit Address"
        />
      )}
    </div>
  );
};
