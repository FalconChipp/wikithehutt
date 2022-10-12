import { Link } from "gatsby";
import React from "react";

export default function NavbarMobile() {
    return (
        <nav className="max-w-[400px] overflow-hidden content-center">
            <div className="font-jedi text-2xl text-center text-white hidden">
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/">Home</Link></div>
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/characters">Characters</Link></div>
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/weapons">Weapons</Link></div>
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/ships">Ships</Link></div>
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/planets">Planets</Link></div>
                <div><Link className="m-5 pt-3 pb-4 px-3" to="/timeline">Timeline</Link></div>
            </div>
        </nav>
        )
    }