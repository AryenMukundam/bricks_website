import React, { createContext, useState, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    isLoading,
    setIsLoading,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeContext;