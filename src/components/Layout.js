import { Slice } from "gatsby";
import React from "react";

export default function Layout({ children }) {  
    return (
            <div className="bg-site w-full h-full bg-contain bg-repeat-y"> 
                <Slice alias="header" />
                <div className="content">
                    { children }
                </div>
                <Slice alias="footer" />
            </div> 
        )
  }