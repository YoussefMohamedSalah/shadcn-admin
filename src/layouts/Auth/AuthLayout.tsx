import { ROUTES } from "@/constants/routes";
import { selectAuth } from "@/contexts/slices/auth.slice";
import useApp from "@/hooks/useApp";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MainLayout from "../MainLayout";

const AuthLayout = () => {
  const { push } = useApp();

  // Selectors for redux state
  const auth = useSelector(selectAuth);

  // Navigation condition based on auth and booking data
  useEffect(() => {
    if (auth?.id) {
      push(ROUTES.MAIN);
    }
  }, [push, auth]);

  return (
    <MainLayout>
      <main>
        <Outlet />
      </main>
    </MainLayout>
  );
};

export default AuthLayout;
