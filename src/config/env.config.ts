const ENV_KEYS = {
  API_PUBLIC_URL: import.meta.env.VITE_PUBLIC_URL,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_FILES_URL: import.meta.env.VITE_API_FILES_BASE_URL,
  API_WS_URL: import.meta.env.VITE_MAINTENANCE_MODE,
  MAINTENANCE_MODE: import.meta.env.VITE_MAINTENANCE_MODE ? JSON.parse(import.meta.env.VITE_MAINTENANCE_MODE) : false,
};

Object.entries(ENV_KEYS).forEach(([key, val]) => {
  if (val === undefined) {
    if (!import.meta.env.PROD) {
      return console.error(
        `Environment variable: key='${key}' doesn't exist, please check the environmental variables to fix this error!`,
      );
    }
    return console.error("Some configurations are missing, please contact the developers to check!");
  }
});

export default ENV_KEYS;
