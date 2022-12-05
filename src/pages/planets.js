import React from "react";
import Layout from "../components/Layout";
// import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";
import { siteMetadata } from "../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - {siteMetadata.planets.title}</title>
export default function Weapons({ data }) {
    return (
      console.log(data),
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-planet max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Planets</h1>
          <p className="py-4 text-center text-xl">
            Here you can view all the Planets and view all there infomation about them.
          </p>
          <div className="py-4 text-center">
            <button className="btn">View Weapons</button>
          </div>
        </section>
        
        
        <section>
          <h2 className="text-white font-jedi text-center text-6xl p-7">Sabers</h2>
          <div className="grid grid-cols-4 px-8 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Tatooine</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Hoth</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Kamino</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Naboo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 px-8 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Coruscant</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Bespin</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Kashyyyk</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Mustafar</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 px-8 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Dagobah</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Geonosis</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Yavin</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Jakku</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 px-8 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Mandalore</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Polis Massa</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Hosnian Prime</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Mygeeto</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
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
    Vader: file(relativePath: {eq: "darth-vader-bio.png"}) {
      ...ImageSettings
    }
    Chewy: file(relativePath: {eq: "chewbacca-bio.jpg"}) {
      ...ImageSettings
    }
    grogu: file(relativePath: {eq: "grogu-4k.jpg"}) {
      ...ImageSettings
    }
    luke: file(relativePath: {eq: "luke-skywalker-bio.jpg"}) {
      ...ImageSettings
    }
  }
`