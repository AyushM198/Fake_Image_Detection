// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || "");

    const login = (token, email) => {
        setToken(token);
        setUserEmail(email);
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", email);
    };

    const logout = () => {
        setToken("");
        setUserEmail("");
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
    };

    return (
        <AuthContext.Provider value={{ token, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
