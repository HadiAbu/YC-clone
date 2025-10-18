// each route group has its own layout
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout">
      <h1 className="text-3xl">dashboard</h1>
      {children}
    </div>
  );
};

export default Layout;
