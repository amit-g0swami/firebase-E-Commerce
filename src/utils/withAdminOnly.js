import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import firebaseApp, { db } from ".././firebase";

export function withAdminOnly(Component) {
  return function WithAdminOnlyWrapper(props) {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      if (isLoggedIn) {
        const currentUser = firebaseApp.auth().currentUser;
        if (currentUser) {
          const usersCollection = db.collection("users");
          usersCollection
            .where("uid", "==", currentUser.uid)
            .get()
            .then((querySnapshot) => {
              if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setIsAdmin(userData.admin === true);
              }
            })
            .catch((error) => {
              console.error("Error retrieving user details:", error);
            });
        }
      }
    }, [isLoggedIn]);

    return isAdmin ? <Component {...props} /> : null;
  };
}
