import { Link, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


export default function Navbar({ data }) {
  const LogoSettings = useStaticQuery( `
  fragment LogoSettings on File {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO]
      )
    }
  }
`)

const Logo = useStaticQuery(`
  query {
    Logo: file(relativePath: {eq: "Wiki-The-Hutt-Logo.png"}) {
      ...LogoSettings
    }
  }
`)   
  return (
        <nav className="mt-[35px] bg-transparent mb-[35px] mobile:hidden">
            <div className="font-jedi container-2xl text-2xl text-center text-white">
                <GatsbyImage image={data.Logo} alt="Logo" />
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