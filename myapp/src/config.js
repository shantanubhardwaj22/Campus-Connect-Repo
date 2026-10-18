const stripTrailingSlash = (url = "") => url.replace(/\/$/, "");

export const BACKEND_URL = stripTrailingSlash(
  import.meta.env.VITE_BACKEND_URL ||
    "https://campus-connect-repo.onrender.com",
);

export const FRONTEND_URL = stripTrailingSlash(
  import.meta.env.VITE_FRONTEND_URL ||
    "https://campus-connect-repo.vercel.app",
);
