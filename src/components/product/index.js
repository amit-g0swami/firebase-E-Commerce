import { useDispatch, useSelector } from "react-redux";
import { useProductFilter } from "../../hooks/useProductFilter";
import { add } from "../../redux/reducers/cart-reducer";

const Product = ({ filter }) => {
  const { products } = useSelector((state) => state.products);
  const filteredProducts = useProductFilter(products, filter);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(add(item));
  };
  return (
    <div className="item">
      {filteredProducts?.map((item) => (
        <div key={item?.id} className="product-name">
          <img
            src={item?.image}
            alt=""
            className="product-image"
            draggable="false"
          />
          <div className="product-title">{item?.title?.slice(0, 10)}...</div>
          <div className="product-price">{item?.price} $</div>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
