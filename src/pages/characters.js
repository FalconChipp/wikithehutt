import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - {siteMetadata.characters.title}</title>
export default function Characters({ data }) {
    return (
      console.log(data),
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-charactersBg max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Star Wars Characters</h1>
          <p className="py-4 text-center text-xl">
            Here you can view all the Star Wars charcters and view all there infomation about them.
          </p>
          <div className="py-4 text-center">
            <button className="chewybtn">View Weapons</button>
          </div>
        </section>
        
        
        <section>
          <h2 className="text-center font-jedi text-4xl text-white pb-10 pt-10">Choose Your Side!</h2>
          <div className="grid cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 pb-32 container-center">

            <div className="border border-solid border-blueSaber text-center pb-10">
            <GatsbyImage image={data.lightside.childImageSharp.gatsbyImageData} alt="Light Side Logo" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Light Side Chracters</h3>
              <p className="pb-7">Take a look at all the the light side characters that are involved within the Star Wars franchise with individual bios!</p>
              <Link to="/lightsidecharacters"><button className="btn">View Characters</button></Link>
            </div>

            <div className="border border-solid border-redSaber text-center pb-10">
            <GatsbyImage image={data.darkside.childImageSharp.gatsbyImageData} alt="Dark Side Logo" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Dark Side Characters</h3>
              <p className="pb-7">Take a look at all the the dark side characters that are involved within the Star Wars franchise with individual bios!</p>
              <Link to="/darksidecharacters"><button className="darksidebtn">View Characters</button></Link>
            </div>
          </div>
        </section>
      </div>
      </Layout>
    )
  }

export const ImageSettings = graphql `
fragment ImageSettings on File {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO]
      )
    }
  }

`

export const Images = graphql `
  query {
    lightside: file(relativePath: {eq: "lightsidelogo.png"}) {
      ...ImageSettings
    }
    darkside: file(relativePath: {eq: "darksidelogo.jpg"}) {
      ...ImageSettings
    }
  }
`