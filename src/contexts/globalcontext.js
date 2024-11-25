import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTheme = () => useContext(GlobalContext);