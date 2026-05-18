import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getCurrentUser,
  getStoredToken,
  loginUser,
  registerUser,
  removeStoredToken,
  storeToken,
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => getStoredToken());
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let ignore = false;

    async function loadCurrentUser() {
      if (!token) {
        setUser(null);
        setStatus("idle");
        return;
      }

      try {
        setStatus("loading");

        const data = await getCurrentUser(token);

        if (!ignore) {
          setUser(data.user);
          setStatus("authenticated");
        }
      } catch {
        removeStoredToken();

        if (!ignore) {
          setToken(null);
          setUser(null);
          setStatus("idle");
        }
      }
    }

    loadCurrentUser();

    return () => {
      ignore = true;
    };
  }, [token]);

  async function register(payload) {
    const data = await registerUser(payload);

    storeToken(data.token);
    setToken(data.token);
    setUser(data.user);
    setStatus("authenticated");

    return data;
  }

  async function login(payload) {
    const data = await loginUser(payload);

    storeToken(data.token);
    setToken(data.token);
    setUser(data.user);
    setStatus("authenticated");

    return data;
  }

  function logout() {
    removeStoredToken();
    setToken(null);
    setUser(null);
    setStatus("idle");
  }

  const value = useMemo(
    () => ({
      user,
      token,
      status,
      isAuthenticated: Boolean(user && token),
      register,
      login,
      logout,
    }),
    [user, token, status]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
