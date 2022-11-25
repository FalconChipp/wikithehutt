import { Slice } from "gatsby";
import React, { useRef, useEffect } from "react";
import AdCont from "./Ads";
// import Footernew from "./FooterNew";
// import Navbar from "./Nav";


export default function Layout({ children }) {
    
    const Ads = () => {
        const scrolled = useRef(null)
    
        useEffect(() => {
            const headID = document.getElementsByTagName('head')[0]
    
            document.addEventListener('scroll', function (e) {
                if (!scrolled.current) {
                    scrolled.current = true
    
                    //Google Ads Info
                    const gaScript = document.createElement('script')
                    gaScript.async = true
                    gaScript.crossOrigin = 'adsense'
                    gaScript['data-ad-client'] = 'ADD-GA-CODE'
                    gaScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
                    gaScript.type = 'text/javascript'
                    headID.appendChild(gaScript)
                }
            })
        }, [] )
    }
    
    return (
        <div className="bg-site w-full h-full bg-contain bg-repeat-y">
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <Ads />
            <Slice alias="header" />
            <div className="content">
                { children }
                <AdCont />
            </div>
            
            <Slice alias="footer" />
       
        </div>
        )
  }