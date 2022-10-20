import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
    return (
            <div className="w-full grid grid-cols-4 pb-5 bg-nav pt-5 gap-5">
                <div>
                    <Link to="/"><StaticImage src="../images/Wiki-The-Hutt-Logo.png" width="500" className="mx-8" alt="Logo" placeholder="blurred"/></Link>
                </div>
                <div className="text-white text-lg">
                    <h2 className="font-jedi text-2xl text-center">Links</h2>
                    <div className="grid grid-cols-2">
                        <div><Link className="font-dosis" to="/">Home</Link></div>
                        <div><Link className="font-dosis" to="/characters">Characters</Link></div>
                        <div><Link className="font-dosis" to="/weapons">Weapons</Link></div>
                        <div><Link className="font-dosis" to="/ships">Ships</Link></div>
                        <div><Link className="font-dosis" to="/planets">Planets</Link></div>
                        <div><Link className="font-dosis" to="/timeline">Timeline</Link></div>
                    </div>
                </div>
                <div className="text-white">
                    <h2 className="font-jedi text-2xl text-center text-white">Contact/Legal</h2>
                    <div><Link className="font-dosis" to="#">Cookies</Link></div>
                    <div><Link className="font-dosis" to="#">Terms</Link></div>
                    <div><Link className="font-dosis" to="#">Contact</Link></div>
                    <div><Link className="font-dosis" to="#">FAQs</Link></div>
                </div>
                <div>
                    <h2 className="font-jedi text-2xl text-center text-white">Socials?</h2>
                    <div className="grid grid-cols-2 gap-0">
                        <div className="justify-right">
                        </div>
                    </div>
                </div>
            </div>
        )
  }