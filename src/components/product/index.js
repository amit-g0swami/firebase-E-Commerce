import { useDispatch, useSelector } from "react-redux";
import { useProductFilter } from "../../hooks/useProductFilter";
import { add } from "../../redux/reducers/cart-reducer";
import { Button } from "../../generic-components/button/Button";
import { Tooltip } from "../../generic-components/tooltip";
import { FaRegStar } from "react-icons/fa";

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
          <div className="row">
            <div className="product-title">{item?.title?.slice(0, 10)}...</div>
            <Tooltip text={item?.rating?.rate}>
              <FaRegStar />
            </Tooltip>
          </div>
          <div className="product-price">{item?.price} $</div>
          <Button onClick={() => handleClick(item)}>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
};

export default Product;
