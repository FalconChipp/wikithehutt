import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Hamburger from "./hamburger";

    export default function Navbar({ data }) {
        return (
              <nav className="mt-[35px] bg-transparent mb-[35px]">
                  <div className="font-jedi text-center text-white hidden items-baseline laptop:grid laptop:grid-cols-7 laptop:text-2xl min-[1700px]:text-3xl">
                      <Link to="/"><StaticImage src="../images/Wiki-The-Hutt-Logo.png" width="250" alt="Logo" className="mt-[-20px]" placeholder="blurred"/></Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-redSaber hover:text-redSaber rounded-xl" to="/">Home</Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-blueSaber hover:text-blueSaber rounded-xl" to="/characters">Characters</Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-greenSaber hover:text-greenSaber rounded-xl" to="/weapons">Weapons</Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-orangeSaber hover:text-orangeSaber rounded-xl" to="/ships">Ships</Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-purpleSaber hover:text-purpleSaber rounded-xl" to="/planets">Planets</Link>
                      <Link className="pt-1 pb-2 px-3 hover:shadow-yellowSaber hover:text-yellowSaber rounded-xl" to="/timeline">Timeline</Link>
                  </div>
                
                <div className="laptop:hidden">
                    <Hamburger />
                </div>
              </nav>
              )
   }
