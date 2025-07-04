import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Loading from "../Component/Loading/Loading";
import { Navigate } from "react-router";
import Swal from "sweetalert2";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    <Navigate to="/sign-in"></Navigate>;
    Swal.fire({
      icon: "error",
      title: "You need to Login first",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return children;
};

export default Private;
