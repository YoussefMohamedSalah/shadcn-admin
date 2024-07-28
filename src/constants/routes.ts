const AUTH_PREFIX = "/auth";
// const LANDING_PREFIX = "/landing";
const WALLET_PREFIX = "/wallet";
const SETTINGS_PREFIX = "/settings";

// AUTH PAGES
const authRoutes = {
  LOGIN: `${AUTH_PREFIX}/login`,
  REGISTER: `${AUTH_PREFIX}/sign-up`,
};

// LANDING PAGES
const landingRoutes = {
  // HOME: '/login',
  // HOME_2: '/sign-up',
};

// Listings Routes
const portalRoutes = {
  TASKS: 'media',
  PROFILE: 'profile',
  STORE: 'store',
  MY_NETWORK: 'my-network',
  MY_RANK: 'my-rank',
  MY_SERVICES: 'my-services',
  TRANSACTIONS: 'transactions',
  MEDIA: 'media',
};

const walletRoutes = {
  WITHDRAW: `${WALLET_PREFIX}/withdraw`,
  DEPOSIT: `${WALLET_PREFIX}/deposit`,
  REPORTS: `${WALLET_PREFIX}/reports`,
  WALLET_SUPPORT: `${WALLET_PREFIX}/wallet-support`,
};

const settingsRoutes = {
  ACCOUNT: `${SETTINGS_PREFIX}/account`,
  APPEARANCE: `${SETTINGS_PREFIX}/appearance`,
  NOTIFICATIONS: `${SETTINGS_PREFIX}/notifications`,
  DISPLAY: `${SETTINGS_PREFIX}/display`,
  ERROR_EXAMPLE: `${SETTINGS_PREFIX}/error-example`,
};

export const ROUTES = {
  MAIN: "/",
  AUTH: AUTH_PREFIX,

  // Landing pages
  ...landingRoutes,

  // Auth pages
  ...authRoutes,

  // Portal dashboard pages
  ...portalRoutes,
  ...walletRoutes,
  ...settingsRoutes,
};