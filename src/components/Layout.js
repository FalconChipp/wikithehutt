import React from "react";
import Header from "./Header";
import Footernew from "./FooterNew";
import Navbar from "./Nav";
import Hamburger from "./hamburger";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            {/* <DesktopNavMenu/>
            <MobileNavMenu /> */}
            <div className="content">
                {children}
            </div>
            <Footernew />
        </div>
        )
  }