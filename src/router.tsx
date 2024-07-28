import { lazy } from "react";
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'
import UnauthorisedError from './pages/errors/unauthorised-error'
import { createBrowserRouter } from "react-router-dom";
import authService from './api/services/Auth/auth.service';
import { ProtectedRoute } from "./protected-route";
import { ROUTES } from './constants/routes';
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import AuthLayout from "./layouts/Auth/AuthLayout";
import LandingPage from "./pages/LandingPages/LandingPage";

type TLoginLoader = Promise<{ isLoggedIn: boolean }>;

const isLoggedInLoader = async (): TLoginLoader => {
  return { isLoggedIn: await authService.isLoggedIn() };
};

// Group Auth Pages
const AuthPages = {
  Login: lazy(() => import("@/pages/auth/sign-in")),
  SignUp: lazy(() => import("@/pages/auth/sign-up")),
};

const DashboardPages = {
  Dashboard: lazy(() => import("./pages/dashboard")),
};

const GeneralPages = {
  Tasks: lazy(() => import("./pages/tasks")),
  Profile: lazy(() => import("./pages/profile")),
  Store: lazy(() => import("./pages/tasks")),
  MyNetwork: lazy(() => import("./pages/network/Network")),
  MyRank: lazy(() => import("./pages/rank/Rank")),
  MyServices: lazy(() => import("./pages/services/Services")),
  Transactions: lazy(() => import("./pages/transactions/transactions")),
  Media: lazy(() => import("./pages/media/Media")),
};

const WalletPages = {
  Layout: lazy(() => import("./pages/wallet")),
  Main: lazy(() => import("./pages/wallet/account")),
  Withdraw: lazy(() => import("./pages/wallet/account")),
  Deposit: lazy(() => import("./pages/wallet/appearance")),
  Reports: lazy(() => import("./pages/wallet/notifications")),
  Support: lazy(() => import("./pages/wallet/display")),
};

const SettingsPages = {
  Layout: lazy(() => import("./pages/settings")),
  Main: lazy(() => import("./pages/settings/account")),
  Account: lazy(() => import("./pages/settings/account")),
  Appearance: lazy(() => import("./pages/settings/account")),
  Notifications: lazy(() => import("./pages/wallet/notifications")),
  Display: lazy(() => import("./pages/settings/display")),
  Error: lazy(() => import("./pages/settings/error-example")),
};

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    loader: isLoggedInLoader,
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        loader: isLoggedInLoader,
        element: <DashboardPages.Dashboard />,
      },
      { path: ROUTES.TASKS, element: <GeneralPages.Tasks /> },
      { path: ROUTES.PROFILE, element: <GeneralPages.Profile /> },
      { path: ROUTES.STORE, element: <GeneralPages.Store /> },
      { path: ROUTES.MY_NETWORK, element: <GeneralPages.MyNetwork /> },
      { path: ROUTES.MY_RANK, element: <GeneralPages.MyRank /> },
      { path: ROUTES.MY_SERVICES, element: <GeneralPages.MyServices /> },
      { path: ROUTES.TRANSACTIONS, element: <GeneralPages.Transactions /> },
      { path: ROUTES.MEDIA, element: <GeneralPages.Media /> },
      {
        path: "wallet",
        element: <WalletPages.Layout />,
        children: [
          { index: true, element: <WalletPages.Main /> },
          { path: ROUTES.WITHDRAW, element: <WalletPages.Withdraw /> },
          { path: ROUTES.DEPOSIT, element: <WalletPages.Deposit /> },
          { path: ROUTES.REPORTS, element: <WalletPages.Reports /> },
          { path: ROUTES.WALLET_SUPPORT, element: <WalletPages.Support /> },
        ]
      },
      {
        path: "settings",
        element: <SettingsPages.Layout />,
        children: [
          { index: true, element: <SettingsPages.Main /> },
          { path: ROUTES.ACCOUNT, element: <SettingsPages.Account /> },
          { path: ROUTES.APPEARANCE, element: <SettingsPages.Appearance /> },
          { path: ROUTES.NOTIFICATIONS, element: <SettingsPages.Notifications /> },
          { path: ROUTES.DISPLAY, element: <SettingsPages.Display /> },
          { path: ROUTES.ERROR_EXAMPLE, element: <SettingsPages.Error /> },
        ],
        errorElement: <GeneralError className='h-[50svh]' minimal />,
      },
    ],
  },
  {
    path: ROUTES.AUTH,
    element: <AuthLayout />,
    children: [
      { path: ROUTES.LOGIN, element: <AuthPages.Login /> },
      { path: ROUTES.REGISTER, element: <AuthPages.SignUp /> },
    ],
  },

  { path: '/landing', element: <LandingPage /> },

  // Error routes
  { path: '/500', element: <GeneralError /> },
  { path: '/404', element: <NotFoundError /> },
  { path: '/503', element: <MaintenanceError /> },
  { path: '/401', element: <UnauthorisedError /> },

  // Fallback 404 route
  { path: '*', element: <NotFoundError /> },
]);

export default router
