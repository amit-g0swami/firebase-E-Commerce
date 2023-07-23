import { toast } from "react-toastify";
import { db } from "../firebase";

export const getData = async () => {
  const productsCollection = db.collection("products");
  const querySnapshot = await productsCollection.get();
  const res = querySnapshot.docs.map((doc) => doc.data());
  return res;
};

export const addAProduct = async (data) => {
  try {
    const productRef = await db.collection("products").add(data);
    toast("New product added with ID: " + productRef.id);
  } catch (error) {
    toast("Error adding product");
  }
};

// pushing data from the api
// import { baseUrl } from "../config/config";
// export const getdata = async () => {
//   const res = await fetch(baseUrl).then((res) => res.json());
//   return res;
// };
