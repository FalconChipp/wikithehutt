import React from "react";
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import Header from "./Header";
import NavbarMobile from "./NavMob";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <NavbarMobile />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
        )
  }