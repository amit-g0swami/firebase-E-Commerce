import React from "react";
import Grid from "@mui/material/Grid";
import { BiRefresh } from "react-icons/bi";
import { showAllProducts, showAllUsers } from "../../services/admin-service";
import { AddProduct } from "./AddProduct";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const AdminBar = ({
  setActiveTable,
  setModalOpen,
  modalOpen,
  setProducts,
  setUsers
}) => {
  const handleShowProducts = async () => {
    await showAllProducts(setProducts);
    setActiveTable("products");
  };
  const handleShowUsers = async () => {
    await showAllUsers(setUsers);
    setActiveTable("users");
  };
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      style={{ marginTop: "10px" }}
    >
      <Grid item xs={12} sm={6}>
        <Grid container spacing={1}>
          <Grid item>
            <button variant="contained" onClick={handleShowProducts}>
              Show Products <BiRefresh />
            </button>
          </Grid>
          <Grid item>
            <button variant="contained" onClick={handleShowUsers}>
              Show Users <BiRefresh />
            </button>
          </Grid>
          <Grid item style={{ marginTop: "3px" }}>
            <AddCircleOutlineIcon onClick={() => setModalOpen(!modalOpen)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="row"
        justifyContent="flex-end"
      >
        {modalOpen && (
          <AddProduct
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            formHeader="Add Product"
          />
        )}
      </Grid>
    </Grid>
  );
};
