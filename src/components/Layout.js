import React from "react";
import Navbar from '../components/Nav'
import Header from "./Header";
import Footernew from "./FooterNew";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footernew />
        </div>
        )
  }