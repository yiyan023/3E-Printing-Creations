// src/contexts/OpenLinkContext.js
import { createContext, useContext, useState } from 'react';

// Create the context
const ItemContext = createContext();

// Custom hook for easy access to the context
export const useItemContext = () => useContext(ItemContext);

// Provider component to manage the state
export const ItemContextProvider = ({ children }) => {
  const [openLink, setOpenLink] = useState('');

  return (
    <ItemContext.Provider value={{ openLink, setOpenLink }}>
      {children}
    </ItemContext.Provider>
  );
};
