import React from "react";
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import Header from "./Header";
import Hamburger from "./hamburger";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <Hamburger />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
        )
  }