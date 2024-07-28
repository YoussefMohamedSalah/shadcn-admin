import React, { ReactNode } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { ROUTES } from "./constants/routes";

interface LoaderData {
  isLoggedIn: boolean;
}

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }): React.ReactElement => {
  const { isLoggedIn }: LoaderData = useLoaderData() as LoaderData;

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <>{children}</>;
};
