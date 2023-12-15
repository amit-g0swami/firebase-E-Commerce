import React from "react";
import Grid from "@mui/material/Grid";
import { BiRefresh } from "react-icons/bi";
import { showAllProducts, showAllUsers } from "../../services/admin-service";
import { AddProduct } from "./AddProduct";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "../../generic-components/button/Button";

export const AdminBar = ({
  setModalOpen,
  modalOpen,
  setProducts,
  setUsers,
}) => {
  const handleShowProducts = async () => {
    await showAllProducts(setProducts);
  };
  const handleShowUsers = async () => {
    await showAllUsers(setUsers);
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
            <Button onClick={handleShowProducts}>
              Show Products <BiRefresh />
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleShowUsers}>
              Show Users <BiRefresh />
            </Button>
          </Grid>
          <Grid item style={{ marginTop: "3px", cursor: "pointer" }}>
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
