import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [token, setToken] = useState(null); // Login token
    const [currentUser, setCurrentUser] = useState(null); // Currently logged in user

    // Load token & user from localStorage when app opens
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("currentUser");
        if (savedToken) setToken(savedToken);
        if (savedUser) setCurrentUser(JSON.parse(savedUser));
    }, []);

    // LOGIN FUNCTION
    const login = (username, password) => {
        // Load users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            const dummyToken = Math.random().toString(36).substr(2); 
            setToken(dummyToken);
            setCurrentUser(foundUser);
            localStorage.setItem("token", dummyToken);
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            alert("Login Successful 🎉");
            return true;
        } else {
            alert("Invalid Username or Password ❌");
            return false;
        }
    };

    // REGISTER FUNCTION
    const register = (email, username, password) => {
        // Load users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user already exists
        const exist = users.find((u) => u.username === username || u.email === email);
        if (exist) {
            alert("User already exists ❌");
            return false;
        }

        const newUser = { email, username, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registered Successfully 🎉");
        return true;
    };

    // LOGOUT FUNCTION
    const logout = () => {
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        alert("Logged Out Successfully 👋");
    };

    return (
        <AuthContext.Provider value={{ token, currentUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
