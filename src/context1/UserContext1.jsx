import React, { createContext, useState } from "react";

export const UserContext1 = createContext();

export const UserProvider1 = ({ children }) => {
  const [user1, setUser1] = useState(null);

  return (
    <UserContext1.Provider value={{ user1, setUser1 }}>
      {children}
    </UserContext1.Provider>
  );
};
