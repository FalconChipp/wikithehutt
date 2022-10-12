import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";

export const Head = () => <title>Weapons</title>
export default function Weapons({ data }) {
    return (
      console.log(data),
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-weapons max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Weapons</h1>
          <p className="py-4 text-center text-xl">
            Here you can view all the Star Wars Weapons and view all there infomation about them.
          </p>
          <div className="py-4 text-center">
            <button className="btn">View Weapons</button>
          </div>
        </section>
        
        
        <section>
          <h2 className="text-white font-jedi text-center text-6xl p-7">Sabers</h2>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth `aders Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Luke Skywalkers Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Yodas Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">obi-Wans Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Sidious Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">qui-Gon Jinns Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Anakin Skywalkers Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">General Grievous' Sabers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Assajj `entress' Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Pong Krells Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Darksaber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Count Dookus Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Kylo Rens Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Grand inquisitors Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Mace Windus Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Mauls Saber</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <h2 className="text-white font-jedi text-center text-6xl p-7">Blasters</h2>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Westar-34 Blaster Pistol</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">A-280c Blaster Rifle</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Ezra Lightsaber/Blaster</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">E-Web Heavy Repeating Blaster</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">DL-44 Heavy Blaster Pistol</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">T-21</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Relby-v10</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">DT-12</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">x-8 Night Sniper</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">RT 97C</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">CA 87</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Bowcaster</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-2 container-center px-8">
            <div className="border border-solid border-redSaber text-center">
              {/*<GatsbyImage image={data.Vader.childImageSharp.gatsbyImageData} alt="Vader" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">DH-17</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="darksidebtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">NN-14</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod stempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">DLT-19</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button className="chewybtn">CTA</button>
            </div>
            <div className="border border-solid border-blueSaber text-center">
              {/*<GatsbyImage image={data.Chewy.childImageSharp.gatsbyImageData} alt="Chewy" />*/}
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">E-11</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaa</p>
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