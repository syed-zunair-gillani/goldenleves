"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [buttonState, setButtonState] = useState('')
  console.log("🚀 ~ GlobalProvider ~ buttonState:", buttonState)

  return (
    <GlobalContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        buttonState, setButtonState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
