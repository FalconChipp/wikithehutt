import React from "react";
import Navbar from '../components/Nav'
import Header from "./Header";
import Hamburger from "./hamburger";
import Footernew from "./FooterNew";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <Hamburger />
            <div className="content">
                {children}
            </div>
            <Footernew />
        </div>
        )
  }