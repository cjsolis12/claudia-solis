import { createContext, useContext, useState } from "react";
import Navbar from "../layout/Navbar";

const HoveredNavLinkContext = createContext();

export function useHoveredNavLinkContext() {
  return useContext(HoveredNavLinkContext);
}

export function HoveredNavLinkProvider({ children }) {
  const [hoveredNavLink, setHoveredNavLink] = useState(null);

  return (
    <HoveredNavLinkContext.Provider value={{ hoveredNavLink, setHoveredNavLink }}>
      {children}
    </HoveredNavLinkContext.Provider>
  );
}