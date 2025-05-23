import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return { success: false, message: "User with this email already exists" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ name, email });
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (existingUser) {
      setUser({ name: existingUser.name, email: existingUser.email });
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
