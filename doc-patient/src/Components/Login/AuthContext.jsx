/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  // Time in milliseconds before logout (e.g., 1 hour)
  const INACTIVITY_LIMIT = 60 * 60 * 1000;

  // Function to reset the logout timer
  const resetLogoutTimer = useCallback(() => {
    if (user) {
      clearTimeout(window.inactivityTimeout);
      window.inactivityTimeout = setTimeout(logout, INACTIVITY_LIMIT);
    }
  }, [user]);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${apiUrl}login`, { username, password });
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
    clearTimeout(window.inactivityTimeout);
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
    setIsLoading(false); // Set loading to false after checking local storage
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      resetLogoutTimer();
    } else {
      localStorage.removeItem('user');
    }
  }, [user, resetLogoutTimer]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click'];
    const handleActivity = resetLogoutTimer;

    events.forEach(event => window.addEventListener(event, handleActivity));

    // Clean up event listeners on component unmount
    return () => {
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [resetLogoutTimer]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
