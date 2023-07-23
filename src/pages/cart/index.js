import { useDispatch, useSelector } from "react-redux";
import { CartDetails } from "../../components/cart/CartDetails";
import { CartItem } from "../../components/cart/CartItem";
import { remove } from "../../redux/reducers/cart-reducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart, uid } = useSelector((state) => ({
    cart: state.cart.cart,
    uid: state.auth.user.uid
  }));
  const handleClick = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      {cart?.length > 0 && <CartDetails cart={cart} uid={uid} />}
      <div className="item">
        {cart?.length === 0 ? (
          <div className="center">
            <h2>Cart is empty</h2>
          </div>
        ) : (
          <div style={{ gap: "10px" }} className="column">
            {cart?.map((item) => (
              <CartItem key={item?.id} item={item} handleClick={handleClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
