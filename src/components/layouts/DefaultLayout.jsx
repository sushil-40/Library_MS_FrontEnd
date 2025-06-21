import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Header />

      {/* main body  */}

      <main className="main">
        <Outlet />
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
