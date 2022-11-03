import React from "react";
import Navbar from '../components/Nav'
import Header from "./Header";
import Hamburger from "./hamburger";
<<<<<<< HEAD
=======
import Footernew from "./FooterNew";
>>>>>>> d56cf0bd6b0386afd6044e02237c075f1ab5a6b8

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