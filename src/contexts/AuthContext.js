import { axiosInstance } from '@/config/axiosConfig';
import { backendHost } from '../config/endpoints';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLocalStorage, useSessionStorage } from "../hooks/useStorage";

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setLocal, removeLocal] = useSessionStorage('user', null);

  useEffect(() => {checkUserLoggedIn()}, []);

  // Register user
  const register = (userData) => {
    setError(null);
    setLocal(userData);
  };

  // Login user
  const login = (userData) => {
    setError(null);
    setLocal(userData);
  };

  // Logout user
  const logout = async () => {
    axiosInstance
      .post(`${backendHost}/api/auth/logout`)
      .then((res) => removeLocal())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        removeLocal();
      });
  };

  // // Check if user is logged in
  const checkUserLoggedIn = async () => {
    if (typeof window !== 'undefined') {
      axiosInstance
        .get(`${backendHost}/api/auth/validate`)
        .then((res) => {
          setLocal(res.data);
        })
        .catch((err) => {
          removeLocal();
          logout();
        });
    }
  };

  const logindetails = useMemo(() => ({ user, error, register, login, logout }),[]);
  return (
    <AuthContext.Provider value={logindetails}>
      {children}
    </AuthContext.Provider>
  );
}
