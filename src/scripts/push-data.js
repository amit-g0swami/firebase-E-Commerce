import { db } from "../firebase";
import { getdata } from "../services/product-service";

//script to push data to firebase
export const pushDataToFireBase = async () => {
  const productsCollection = db.collection("products");
  const productDetails = await getdata();
  productDetails.forEach((product) => {
    productsCollection
      .add(product)
      .then((docRef) => {
        console.log("Product added with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  });
};
