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
              <GatsbyImage image={data.xwing.childImageSharp.gatsbyImageData} alt="x-Wing" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">x-Wing</h3>
              <p className="pb-7 text-lg mx-8">X-Wing to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/slave-1"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.falcon.childImageSharp.gatsbyImageData} alt="Millenium Falcon" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Millenium Falcon</h3>
              <p className="pb-7 text-lg mx-8">Millenium Falcon to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/millenium-falcon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.deathstar.childImageSharp.gatsbyImageData} alt="The Death Star" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Death Star</h3>
              <p className="pb-7 text-lg mx-8">The Death Star to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/death-star"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.darthvadertiefighter.childImageSharp.gatsbyImageData} alt="Darth Vaders Tie Advanced X1" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth `aders Tie Advanced x1</h3>
              <p className="pb-7 text-lg mx-8">Darth Vaders Tie Advanced X1 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/tie-advanced-x1"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>
      </div>


      <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.slave1.childImageSharp.gatsbyImageData} alt="Slave 1" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Slave 1</h3>
              <p className="pb-7 text-lg mx-8">Slave 1 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/slave-1"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.tiefighter.childImageSharp.gatsbyImageData} alt="Tie Fighter" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Tie Fighter</h3>
              <p className="pb-7 text-lg mx-8">Tie Fighter to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/millenium-falcon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.asfbwing.childImageSharp.gatsbyImageData} alt="A/SF-01 B-Wing" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">A/SF-01 B-Wing</h3>
              <p className="pb-7 text-lg mx-8">A/SF-01 B-Wing to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/death-star"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.theinterceptor.childImageSharp.gatsbyImageData} alt="The Interceptor" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The interceptor</h3>
              <p className="pb-7 text-lg mx-8">The Interceptor to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/tie-advanced-x1"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.solorsail.childImageSharp.gatsbyImageData} alt="Dooku's Solar Sailer" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Dooku's Solar Sailer</h3>
              <p className="pb-7 text-lg mx-8">Dooku's Solar Sailer to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/slave-1"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.stardestroyer.childImageSharp.gatsbyImageData} alt="Star Destroyer" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Star Destroyer</h3>
              <p className="pb-7 text-lg mx-8">Star Destroyer to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/millenium-falcon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.awing.childImageSharp.gatsbyImageData} alt="A-Wing" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">A-Wing</h3>
              <p className="pb-7 text-lg mx-8">A-Wing to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/death-star"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.superstar.childImageSharp.gatsbyImageData} alt="Super Star Destroyer" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Super Star Destroyer</h3>
              <p className="pb-7 text-lg mx-8">Super Star Destroyer to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/tie-advanced-x1"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.btlywing.childImageSharp.gatsbyImageData} alt="BTL Y-Wing" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">BTL Y-Wing</h3>
              <p className="pb-7 text-lg mx-8">BTL Y-Wing to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/slave-1"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.lambdaclass.childImageSharp.gatsbyImageData} alt="Lambda Class T-4A" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Lambda Class T-4A</h3>
              <p className="pb-7 text-lg mx-8">Lambda Class T-4A to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/millenium-falcon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.nebulon.childImageSharp.gatsbyImageData} alt="Nebulon-B Frigate" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Nebulon-B Frigate</h3>
              <p className="pb-7 text-lg mx-8">Nebulon-B Frigate to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/death-star"><button className="btn">View Bio</button></Link>
            </div>
            <div className="shipBoostGlow text-center pb-10">
              <GatsbyImage image={data.cr90.childImageSharp.gatsbyImageData} alt="CR90 Corvette" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">CR90 Corvette</h3>
              <p className="pb-7 text-lg mx-8">CR90 Corvette to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/ships/slave-1"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>
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
    slave1: file(relativePath: {eq: "slave-1.jpg"}) {
      ...ImageSettings
    }
    tiefighter: file(relativePath: {eq: "tie-fighter.jpg"}) {
      ...ImageSettings
    }
    asfbwing: file(relativePath: {eq: "asf-b-wing.png"}) {
      ...ImageSettings
    }
    theinterceptor: file(relativePath: {eq: "the-interceptor.jpg"}) {
      ...ImageSettings
    }
    cr90: file(relativePath: {eq: "cr90.png"}) {
      ...ImageSettings
    }
    stardestroyer: file(relativePath: {eq: "star-destroyer.jpg"}) {
      ...ImageSettings
    }
    awing: file(relativePath: {eq: "a-wing.jpeg"}) {
      ...ImageSettings
    }
    superstar: file(relativePath: {eq: "super-star-destroyer.png"}) {
      ...ImageSettings
    }
    btlywing: file(relativePath: {eq: "btl-ywing.jpg"}) {
      ...ImageSettings
    }
    lambdaclass: file(relativePath: {eq: "lambda-class.png"}) {
      ...ImageSettings
    }
    nebulon: file(relativePath: {eq: "nebulon.jpg"}) {
      ...ImageSettings
    }
    solorsail: file(relativePath: {eq: "solor-sail.jpg"}) {
      ...ImageSettings
    }
   }
`