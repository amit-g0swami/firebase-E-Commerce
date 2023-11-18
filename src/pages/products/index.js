import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsData } from "../../redux/reducers/product-reducer";
import Product from "../../components/product";
import TextField from "@mui/material/TextField";
import { Container } from "../../generic-components/container/Container";

export const Products = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  return (
    <Container>
      <Container
        className="row"
        style={{ alignItems: "center", marginBottom: "16px" }}
      >
        <h2 style={{ marginRight: "16px" }}>Products</h2>
        <TextField
          label="Filter products"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& .MuiInputLabel-outlined": {
              color: "#888",
            },
            "& .MuiOutlinedInput-input": {
              padding: "14px 14px",
            },
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
              transform: "translate(14px, -6px) scale(0.75)",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& .Mui-focused .MuiInputLabel-outlined": {
              color: "#fff",
            },
          }}
        />
      </Container>
      <Product filter={filter} />
    </Container>
  );
};
