import React, { type FC } from "react";
import { useProfile } from "../../service/auth";
import Loader from "../loader/Loader";
import { Navigate, Outlet } from "react-router-dom";

const Protected: FC = () => {
  const { user, isLoading, error } = useProfile();

  if (isLoading) return <Loader />;
  if (!user || !user.isSeller) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default Protected;
