import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../utils/breakpoints";

    export default function Navbar({ data }) {

        return (
              <nav className="mt-[35px] bg-transparent mb-[35px] mobile:hidden">
                  <div className="font-jedi grid grid-cols-7 text-3xl text-center text-white items-baseline">
                      <Link to="/"><StaticImage src="../images/Wiki-The-Hutt-Logo.png" width="250" alt="Logo" className="mt-[-20px]" placeholder="blurred"/></Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-redSaber hover:text-redSaber rounded-xl" to="/">Home</Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-blueSaber hover:text-blueSaber rounded-xl" to="/characters">Characters</Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-greenSaber hover:text-greenSaber rounded-xl" to="/weapons">Weapons</Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-orangeSaber hover:text-orangeSaber rounded-xl" to="/ships">Ships</Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-purpleSaber hover:text-purpleSaber rounded-xl" to="/planets">Planets</Link>
                      <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-yellowSaber hover:text-yellowSaber rounded-xl" to="/timeline">Timeline</Link>
                  </div>
              </nav>
              )
   }
