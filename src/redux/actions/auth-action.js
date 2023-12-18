import firebaseApp, { db } from "../../firebase";
import { toast } from "react-toastify";
import { authActionTypes } from "../types";

export const SignoutUser = () => (dispatch) => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: authActionTypes.SIGNOUT_USER });
    });
};

export const SignupUser = (name, email, password) => (dispatch) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebaseApp
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(async () => {
          const currentUser = await firebaseApp.auth().currentUser;
          const usersCollection = db.collection("users");
          const newUser = {
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
            admin: null,
            cartDetails: [],
            shippingAddress: null,
          };
          usersCollection
            .add(newUser)
            .then((docRef) => {
              toast("User details added with ID:", docRef.id);
            })
            .catch((error) => {
              toast("Error adding user details:");
            });
          dispatch({
            type: "SIGNIN_USER",
            payload: newUser,
          });
        })
        .catch((error) => {
          toast("Error updating user profile:");
        });
    })
    .catch((error) => {
      toast("Error creating user:");
    });
};

export const SigninUser = (email, password) => (dispatch) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({
        type: authActionTypes.SIGNIN_USER,
        payload: {
          uid: user.user.uid,
          name: user.user.displayName,
          email: user.user.email,
        },
      });
    })
    .catch((error) => toast("Login Failed"));
};

export const CheckisUserLoggedIn = () => (dispatch) => {
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: authActionTypes.SIGNIN_USER,
        payload: {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        },
      });
    }
  });
};

export const addShippingDetails = (userId, shippingDetails) => {
  const usersCollection = db.collection("users");
  return usersCollection
    .where("uid", "==", userId)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.error("User not found");
        return;
      }
      const userDocRef = querySnapshot.docs[0].ref;
      return userDocRef
        .update({ shippingAddress: shippingDetails })
        .then(() => {
          toast("Shipping details added to user:");
        })
        .catch((error) => {
          toast("Error adding shipping details:");
        });
    })
    .catch((error) => {
      toast("Error fetching user document:");
    });
};

export const getShippingAddress = (userId) => {
  return (dispatch) => {
    const usersCollection = db.collection("users");
    usersCollection
      .where("uid", "==", userId)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.error("User not found");
          return null;
        }
        const userData = querySnapshot.docs[0].data();
        const shippingAddress = userData.shippingAddress;
        if (shippingAddress) {
          dispatch(setAddress(shippingAddress));
        }
      })
      .catch((error) => {
        toast("Error fetching user document:");
        return null;
      });
  };
};

export const setAddress = (shippingAddress) => {
  return {
    type: authActionTypes.SET_ADDRESS,
    payload: {
      shippingAddress,
    },
  };
};
