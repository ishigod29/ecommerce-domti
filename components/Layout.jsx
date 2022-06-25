import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>&copy; Grabbel Shop</title>
        <link rel="shortcut icon" href="/favicon/favicon.svg" type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;
