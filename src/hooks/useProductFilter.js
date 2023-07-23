import { useState, useEffect } from "react";

export const useProductFilter = (products, filter) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    const filtered = products.filter((item) =>
      item?.title?.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, filter]);
  return filteredProducts;
};
