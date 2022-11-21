import { Slice } from "gatsby";
import React from "react";
// import Footernew from "./FooterNew";
// import Navbar from "./Nav";


export default function Layout({ children }) {
    return (
        
        <div className="bg-site w-full h-full bg-contain bg-repeat-y">
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
            
            <Slice alias="header" />
            <div className="content">
                { children }
            </div>
            <Slice alias="footer" />
       
        </div>
        )
  }