import React, { ReactNode } from "react";
import NavigationMenu from "../components/NavigationMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
};

export default Layout;
