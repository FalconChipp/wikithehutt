import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";


export const Head = () => <title>{siteMetadata.title} - {siteMetadata.lightsidechars.title}</title>
export default function Characters({ data }) {
    return (
      console.log(data),
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-charactersBg max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Light Side Characters</h1>
          <p className="py-4 text-center text-xl">
            Here you can view all the Star Wars charcters and view all there infomation about them.
          </p>
          <div className="py-4 text-center">
            <Link to="/darksidecharacters"><button className="darksidebtn">View Dark Side Characters</button></Link>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.chewbacca.childImageSharp.gatsbyImageData} alt="Chewbacca" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Chewbacca</h3>
              <p className="pb-7 text-lg mx-8">Chewbacca to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/chewbacca"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.obiwan.childImageSharp.gatsbyImageData} alt="Obi-Wan Kenobi" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">0bi-Wan Kenobi</h3>
              <p className="pb-7 text-lg mx-8">Obi-Wan Kenobi to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/obi-wan-kenobi"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.yoda.childImageSharp.gatsbyImageData} alt="Yoda" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Yoda</h3>
              <p className="pb-7 text-lg mx-8">Yoda to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/yoda"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.lukeskywalker.childImageSharp.gatsbyImageData} alt="Luke Skywalker" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Luke Skywalker</h3>
              <p className="pb-7 text-lg mx-8">Luke Skywalker to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/luke-skywalker"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>
        </div>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.grogu.childImageSharp.gatsbyImageData} alt="Grogu - just the cuest really" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Grogu</h3>
              <p className="pb-7 text-lg mx-8">Grogu to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/grogu"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.aayla.childImageSharp.gatsbyImageData} alt="Aayla Secura" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Aayla Secura</h3>
              <p className="pb-7 text-lg mx-8">Aayla Secura to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/obi-wan-kenobi"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.ahsoka.childImageSharp.gatsbyImageData} alt="Ahsoka Tano" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Ahsoka Tano</h3>
              <p className="pb-7 text-lg mx-8">Ahsoka Tano to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/ahsoka-tano"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.admiralackbar.childImageSharp.gatsbyImageData} alt="Admiral Ackbar - ITS A TRAP, come on.... I had to" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Admiral Ackbar</h3>
              <p className="pb-7 text-lg mx-8">Admiral Ackbar to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/admiral-ackbar"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8 ">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.anakinskywalker.childImageSharp.gatsbyImageData} alt="Anakin Skywalker" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Anakin Skywalker</h3>
              <p className="pb-7 text-lg mx-8">Anakin Skywalker to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/anakin-skywalker"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.sexypadme.childImageSharp.gatsbyImageData} alt="Padmé Amidala - everyones crush when they were 12" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Padmé Amidala</h3>
              <p className="pb-7 text-lg mx-8">Padmé Amidala to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/padme-amidala"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.macewindu.childImageSharp.gatsbyImageData} alt="Mace Windu is one fly motherfucker!" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Mace Windu</h3>
              <p className="pb-7 text-lg mx-8">Mace Windu to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/mace-windu"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.quigon.childImageSharp.gatsbyImageData} alt="Qui-Gon Jinn" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">qui-Gon Jinn</h3>
              <p className="pb-7 text-lg mx-8">Qui-Gon Jinn to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/qui-gon-jinn"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.hansolo.childImageSharp.gatsbyImageData} alt="Han Solo" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Han Solo</h3>
              <p className="pb-7 text-lg mx-8">Han Solo to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/han-solo"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.leia.childImageSharp.gatsbyImageData} alt="Princess Leia" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Princess Leia</h3>
              <p className="pb-7 text-lg mx-8">Princess Leia to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/leia-organa"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.lando.childImageSharp.gatsbyImageData} alt="Lando Calrissian" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Lando Calrissian</h3>
              <p className="pb-7 text-lg mx-8">Lando Calrissian to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/lando-calrissian"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.mando.childImageSharp.gatsbyImageData} alt="The Mandalorian" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Mandalorian</h3>
              <p className="pb-7 text-lg mx-8">The Mandalorian to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/mandalorian"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.rey.childImageSharp.gatsbyImageData} alt="Rey" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Rey</h3>
              <p className="pb-7 text-lg mx-8">Rey to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/rey"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.finn.childImageSharp.gatsbyImageData} alt="Finn" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Finn</h3>
              <p className="pb-7 text-lg mx-8">Finn to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/finn"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.poenew.childImageSharp.gatsbyImageData} alt="Poe Dameron" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Poe Dameron</h3>
              <p className="pb-7 text-lg mx-8">Poe Dameron to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/poe-dameron"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.cassianandor.childImageSharp.gatsbyImageData} alt="Cassian Andor" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Cassian Andor</h3>
              <p className="pb-7 text-lg mx-8">Cassian Andor to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/cassian-andor"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.bokatan.childImageSharp.gatsbyImageData} alt="Bo-Katan Kryze" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Bo-Katan Kryze</h3>
              <p className="pb-7 text-lg mx-8">Bo-Katan Kryze to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/bo-katan-kryze"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.kitfisto.childImageSharp.gatsbyImageData} alt="Kit Fisto - saaaayyy CHEEEEESE" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Kit Fisto</h3>
              <p className="pb-7 text-lg mx-8">Kit Fisto to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/kit-fisto"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.plokoon.childImageSharp.gatsbyImageData} alt="Plo Koon" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Plo Koon</h3>
              <p className="pb-7 text-lg mx-8">Plo Koon to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/plo-koon"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.shaakti.childImageSharp.gatsbyImageData} alt="Shaak Ti" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Shaak Ti</h3>
              <p className="pb-7 text-lg mx-8">Shaak Ti to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/shaak-ti"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.c3po.childImageSharp.gatsbyImageData} alt="C3P0" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">C3P0</h3>
              <p className="pb-7 text-lg mx-8">C3P0 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/c3po"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
              <GatsbyImage image={data.r2d2.childImageSharp.gatsbyImageData} alt="R2-D2" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">R2-D2</h3>
              <p className="pb-7 text-lg mx-8">R2-D2 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/r2d2"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.bb8.childImageSharp.gatsbyImageData} alt="BB-8" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">BB-8</h3>
              <p className="pb-7 text-lg mx-8">BB-8 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/bb8"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.caradune.childImageSharp.gatsbyImageData} alt="Cara Dune" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Cara Dune</h3>
              <p className="pb-7 text-lg mx-8">Cara Dune to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/cara-dune"><button className="btn">View Bio</button></Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.captainrex.childImageSharp.gatsbyImageData} alt="Captain Rex - Whose a good boy" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Captain Rex</h3>
              <p className="pb-7 text-lg mx-8">Captain Rex to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/captain-rex"><button className="btn">View Bio</button></Link>
            </div>
            <div className="saberGlowLight text-center pb-10">
            <GatsbyImage image={data.commandercody.childImageSharp.gatsbyImageData} alt="Commander Cody" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Commander Cody</h3>
              <p className="pb-7 text-lg mx-8">Commander Cody to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/commander-cody"><button className="btn">View Bio</button></Link>
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
    chewbacca: file(relativePath: {eq: "chewbacca-bio.jpg"}) {
      ...ImageSettings
    }
    obiwan: file(relativePath: {eq: "obi-wan-bio1.jpg"}) {
      ...ImageSettings
    }
    yoda: file(relativePath: {eq: "yoda-bio.jpg"}) {
        ...ImageSettings
      }
      lukeskywalker: file(relativePath: {eq: "luke-skywalker-bio.jpg"}) {
        ...ImageSettings
      }
      grogu: file(relativePath: {eq: "grogu-4k.jpg"}) {
        ...ImageSettings
      }
      aayla: file(relativePath: {eq: "aayla-secura-bio.jpg"}) {
        ...ImageSettings
      }
      ahsoka: file(relativePath: {eq: "ahsoka-tano-bio.jpg"}) {
        ...ImageSettings
      }
      admiralackbar: file(relativePath: {eq: "admiral-ackbar-bio.png"}) {
        ...ImageSettings
      }
      anakinskywalker: file(relativePath: {eq: "anakin-skywalker-bio.jpg"}) {
        ...ImageSettings
      }
      sexypadme: file(relativePath: {eq: "sexy-padme-bio.jpg"}) {
        ...ImageSettings
      }
      macewindu: file(relativePath: {eq: "mace-windu-bio.jpg"}) {
        ...ImageSettings
      }
      quigon: file(relativePath: {eq: "qui-gon-bio.jpg"}) {
        ...ImageSettings
      }
      hansolo: file(relativePath: {eq: "han-solo-bio.jpg"}) {
        ...ImageSettings
      }
      leia: file(relativePath: {eq: "leia-bio.jpg"}) {
        ...ImageSettings
      }
      lando: file(relativePath: {eq: "lando-bio.jpg"}) {
        ...ImageSettings
      }
      mando: file(relativePath: {eq: "the-mando-bio.png"}) {
        ...ImageSettings
      }
      rey: file(relativePath: {eq: "rey-bio.png"}) {
        ...ImageSettings
      }
      finn: file(relativePath: {eq: "finn-bio.png"}) {
        ...ImageSettings
      }
      poenew: file(relativePath: {eq: "poe-new-bio.jpg"}) {
        ...ImageSettings
      }
      cassianandor: file(relativePath: {eq: "cassian-andor-bio.jpg"}) {
        ...ImageSettings
      }
      bokatan: file(relativePath: {eq: "bo-katan-bio.jpg"}) {
        ...ImageSettings
      }
      kitfisto: file(relativePath: {eq: "kit-fisto-bio.jpg"}) {
        ...ImageSettings
      }
      plokoon: file(relativePath: {eq: "plo-koon-bio.jpg"}) {
        ...ImageSettings
      }
      shaakti: file(relativePath: {eq: "shaak-ti-bio.png"}) {
        ...ImageSettings
      }
      c3po: file(relativePath: {eq: "c3po-bio.png"}) {
        ...ImageSettings
      }
      r2d2: file(relativePath: {eq: "r2d2-bio.png"}) {
        ...ImageSettings
      }
      bb8: file(relativePath: {eq: "bb8-bio.jpg"}) {
        ...ImageSettings
      }
      caradune: file(relativePath: {eq: "cara-dune-bio.jpg"}) {
        ...ImageSettings
      }
      captainrex: file(relativePath: {eq: "captain-rex-bio.jpg"}) {
        ...ImageSettings
      }
      commandercody: file(relativePath: {eq: "commander-cody-bio.png"}) {
        ...ImageSettings
      }
  }
`