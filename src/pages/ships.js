import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - {siteMetadata.ships.title}</title>
export default function Shps({ data }) {
    return (
      console.log(data),
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-xwing max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Ships</h1>
          <p className="py-4 text-center text-xl">
            Here you can view all the Star Wars Ships and view all there infomation about them.
          </p>
          <div className="py-4 text-center">
            <button className="chewybtn">View Weapons</button>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.xwing.childImageSharp.gatsbyImageData} alt="Slave 1" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Slave 1</h3>
              <p className="pb-7 text-lg mx-8">Slave 1 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/slave-1"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.falcon.childImageSharp.gatsbyImageData} alt="Millenium Falcon" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Millenium Falcon</h3>
              <p className="pb-7 text-lg mx-8">Millenium Falcon to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/millenium-falcon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.deathstar.childImageSharp.gatsbyImageData} alt="The Death Star" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Death Star </h3>
              <p className="pb-7 text-lg mx-8">The Death Star to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/death-star"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.darthvadertiefighter.childImageSharp.gatsbyImageData} alt="Darth Vaders Tie Advanced X1" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth `aders Tie Advanced x1</h3>
              <p className="pb-7 text-lg mx-8">Darth Vaders Tie Advanced X1 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/tie-advanced-x1"><button className="btn">View Bio</button></Link>
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
    xwing: file(relativePath: {eq: "x-wing-bio.png"}) {
      ...ImageSettings
    }
    falcon: file(relativePath: {eq: "falcon-bio.png"}) {
      ...ImageSettings
    }
    deathstar: file(relativePath: {eq: "death-star-bio.png"}) {
      ...ImageSettings
    }
    darthvadertiefighter: file(relativePath: {eq: "darth-vaders-tie-fighter-bio.jpg"}) {
      ...ImageSettings
    }
   }
`