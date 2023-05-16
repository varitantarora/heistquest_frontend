import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

  const login = (values) => {
    axios
      .post("http://localhost:3307/auth/login", values)
      .then((response) => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate(`/${response.data.userId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = (id) => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
  
    axios
      .post(`http://localhost:3307/auth/${id}/logout`, {token:refreshToken} , config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      });
  };

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      axios
        .post("http://localhost:3307/auth/refresh-token", { refreshToken })
        .then((response) => {
          setAccessToken(response.data.accessToken);
          localStorage.setItem("accessToken", response.data.accessToken);
        })
        .catch((error) => {
          console.log(error);
          logout();
        });
    }, 60000);
    return () => clearInterval(refreshTokenInterval);
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!accessToken, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
