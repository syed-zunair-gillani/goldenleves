"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
