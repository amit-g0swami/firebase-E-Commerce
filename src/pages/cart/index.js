import { useDispatch, useSelector } from "react-redux";
import { CartDetails } from "../../components/cart/CartDetails";
import { CartItem } from "../../components/cart/CartItem";
import { remove } from "../../redux/reducers/cart-reducer";
import { Container } from "../../generic-components/container/Container";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart, uid } = useSelector((state) => ({
    cart: state.cart.cart,
    uid: state.auth.user.uid,
  }));
  const handleClick = (id) => {
    dispatch(remove(id));
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <Container className="center">
          <h2>Cart is empty</h2>
        </Container>
      );
    }
    return (
      <Container style={{ gap: "10px" }} className="column">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} handleClick={handleClick} />
        ))}
      </Container>
    );
  };

  return (
    <Container>
      {cart.length > 0 && <CartDetails cart={cart} uid={uid} />}
      <Container className="item">{renderCartItems()}</Container>
    </Container>
  );
};
