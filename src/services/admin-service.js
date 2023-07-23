import { toast } from "react-toastify";
import firebaseApp, { db } from "../firebase";

export const showAllUsers = async (setUsers) => {
  try {
    const snapshot = await db.collection("users").get();
    const usersData = snapshot.docs.map((doc) => doc.data());
    setUsers(usersData);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

export const showAllProducts = async (setProducts) => {
  try {
    const snapshot = await db.collection("products").get();
    const productsData = snapshot.docs.map((doc) => doc.data());
    setProducts(productsData);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

export const assignAdmin = async (data, updateAdmin) => {
  const { uid } = data;
  const currentUser = firebaseApp.auth().currentUser;
  if (currentUser && currentUser.uid === uid) {
    toast("Cannot update your own admin status.");
    return;
  }
  try {
    const usersRef = db.collection("users");
    const querySnapshot = await usersRef.where("uid", "==", uid).get();
    if (querySnapshot.empty) {
      console.log("User not found.");
      return;
    }
    const userDoc = querySnapshot.docs[0];
    await userDoc.ref.update({ admin: updateAdmin });
    toast("Admin status updated successfully.");
  } catch (error) {
    toast("Error updating admin status: ");
  }
};
