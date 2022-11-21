import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - {siteMetadata.darksidechars.title}</title>
export default function Characters({ data }) {
    return (
      <Layout>
      <div className="w-full">
        <section className="bg-cover bg-center bg-charactersBg max-h-max md:px-10 xl:px-40 pt-32 text-white py-32">
          <h1 className="pt-15 py-4 text-center font-jedi text-6xl">Dark Side Characters</h1>
          <p className="py-4 text-center text-xl">Here you can view all the Dark Side Characters</p>
          <div className="py-4 text-center">
            <Link to="/lightsidecharacters"><button className="btn">View Light Side Characters</button></Link>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-4 pt-7 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthvader.childImageSharp.gatsbyImageData} alt="Darth Vader's Linkedin Profile Pic The empire made him take when he really didn't want to so he just looks awkward" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth `ader</h3>
              <p className="pb-7 text-lg mx-8">Darth Vader to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darthvader"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthsidious.childImageSharp.gatsbyImageData} alt="Darth Sidious - WTF IS THAT" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Sidious</h3>
              <p className="pb-7 text-lg mx-8">Darth Sidious to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-sidious"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.darthmaul.childImageSharp.gatsbyImageData} alt="Darth Maul's Pouting Face" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Maul</h3>
              <p className="pb-7 text-lg mx-8">Darth Maul to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-maul"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.kyloren.childImageSharp.gatsbyImageData} alt="Kylo Ren" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Kylo Ren</h3>
              <p className="pb-7 text-lg mx-8">Kylo Ren to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/kylo-ren"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>
        </div>

        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.starkiller.childImageSharp.gatsbyImageData} alt="Star Killer" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Starkiller</h3>
              <p className="pb-7 text-lg mx-8">Starkiller to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/starkiller"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.countdooku.childImageSharp.gatsbyImageData} alt="Count Dooku's smooth polygons" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Count Dooku</h3>
              <p className="pb-7 text-lg mx-8">Count Dooku to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/count-dooku"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.generalgrevious.childImageSharp.gatsbyImageData} alt="General Grevious - this image is just goated" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">General Grevious</h3>
              <p className="pb-7 text-lg mx-8">General Grevious to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/general-grevious"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.snoke.childImageSharp.gatsbyImageData} alt="Snokes " />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Snoke</h3>
              <p className="pb-7 text-lg mx-8">Snoke to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/snoke"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.assajj.childImageSharp.gatsbyImageData} alt="Assajj Ventress" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Assajj `entress</h3>
              <p className="pb-7 text-lg mx-8">Assajj Ventress to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/assajj-ventress"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.bb9e.childImageSharp.gatsbyImageData} alt="bb-9E, the baddest of the good bois" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">BB-9E</h3>
              <p className="pb-7 text-lg mx-8">BB-9E to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/bb9e"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.droideka.childImageSharp.gatsbyImageData} alt="Droideka jam roly poly" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Droideka</h3>
              <p className="pb-7 text-lg mx-8">Droideka to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/droideka"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.ig88.childImageSharp.gatsbyImageData} alt="IG-88 & Alan Tudyk" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">IG-88</h3>
              <p className="pb-7 text-lg mx-8">IG-88 to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/ig88"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.magna.childImageSharp.gatsbyImageData} alt="Magna Guard" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Magna Guard</h3>
              <p className="pb-7 text-lg mx-8">Magna Guard to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/magna-guard"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.savageoppress.childImageSharp.gatsbyImageData} alt="Savage Opress" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Savage 0press</h3>
              <p className="pb-7 text-lg mx-8">Savage 0press to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/savage-opress"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.grandinq.childImageSharp.gatsbyImageData} alt="The Grand Inquisitor" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">The Grand inquisitor</h3>
              <p className="pb-7 text-lg mx-8">The Grand inquisitor to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/grand-inquisitor"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.b1droid.childImageSharp.gatsbyImageData} alt="B1 Battle Droid - Everyone in for a selfie! 'Roger Roger'" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">B1 Battle Droid</h3>
              <p className="pb-7 text-lg mx-8">B1 Battle Droid to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/b1-battle-droid"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthmalek.childImageSharp.gatsbyImageData} alt="Darth Malek" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Malek</h3>
              <p className="pb-7 text-lg mx-8">Darth Malek to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-malek"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.b2battledroid.childImageSharp.gatsbyImageData} alt="B2 Super Battle Droid" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">B2 Super Battle Droid</h3>
              <p className="pb-7 text-lg mx-8">B2 Super Battle Droid to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/b2-battle-droid"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.captainphasma.childImageSharp.gatsbyImageData} alt="Captain Phasma" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Captain Phasma</h3>
              <p className="pb-7 text-lg mx-8">Captain Phasma to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/captain-phasma"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.darktrooper.childImageSharp.gatsbyImageData} alt="Dark Trooper" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Dark Trooper</h3>
              <p className="pb-7 text-lg mx-8">B1 Battle Droid to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/dark-trooper"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthmalgus.childImageSharp.gatsbyImageData} alt="Darth Malgus" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Malgus</h3>
              <p className="pb-7 text-lg mx-8">Darth Malgus to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-malgus"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthnil.childImageSharp.gatsbyImageData} alt="Darth Nihilus" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Nihilus</h3>
              <p className="pb-7 text-lg mx-8">Darth Nihilus to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-nihilus"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.darthrevan.childImageSharp.gatsbyImageData} alt="Darth Revan" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Revan</h3>
              <p className="pb-7 text-lg mx-8">Darth Revan to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-revan"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.darthsion.childImageSharp.gatsbyImageData} alt="Darth Sion" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Sion</h3>
              <p className="pb-7 text-lg mx-8">Darth Sion to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-sion"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthtalon.childImageSharp.gatsbyImageData} alt="Darth Talon" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Talon</h3>
              <p className="pb-7 text-lg mx-8">Darth Talon to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-talon"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.darthtraya.childImageSharp.gatsbyImageData} alt="Darth Traya" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Darth Traya</h3>
              <p className="pb-7 text-lg mx-8">Darth Traya to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/darth-traya"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.deathtrooper.childImageSharp.gatsbyImageData} alt="Death Trooper" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Death Trooper</h3>
              <p className="pb-7 text-lg mx-8">Death Trooper to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/death-trooper"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.directorkrennic.childImageSharp.gatsbyImageData} alt="Director Krennic" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Director Krennic</h3>
              <p className="pb-7 text-lg mx-8">Director Krennic to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/director-krennic"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.firstorderex.childImageSharp.gatsbyImageData} alt="First order Executioner" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">First order Executioner</h3>
              <p className="pb-7 text-lg mx-8">First Order Executioner to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/first-order-exectutioner"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.gamguardnew.childImageSharp.gatsbyImageData} alt="Gamorrean Guard" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Gamorrean Guard</h3>
              <p className="pb-7 text-lg mx-8">Gamorrean Guard to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/gamorrean-guard"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.generalhux.childImageSharp.gatsbyImageData} alt="General Hux" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">General Hux</h3>
              <p className="pb-7 text-lg mx-8">General Hux to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/general-hux"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.grandtarkin.childImageSharp.gatsbyImageData} alt="Grand Moff Tarkin" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Grand Moff Tarkin</h3>
              <p className="pb-7 text-lg mx-8">Grand Moff Tarkin to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/moff-tarkin"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-5 container-center px-8">
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.jangofett.childImageSharp.gatsbyImageData} alt="Jango Fett" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Jango Fett</h3>
              <p className="pb-7 text-lg mx-8">Jango Fett to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/jango-fett"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
              <GatsbyImage image={data.jabbahutt.childImageSharp.gatsbyImageData} alt="Jabba the Hutt" />
              <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Jabba the Hutt</h3>
              <p className="pb-7 text-lg mx-8">Jabba the Hutt to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/jabba-the-hutt"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.krr.childImageSharp.gatsbyImageData} alt="Krrsantan" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Krrsantan</h3>
              <p className="pb-7 text-lg mx-8">Krrsantan to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/krrsantan"><button className="darksidebtn">View Bio</button></Link>
            </div>
            <div className="saberGlowDark text-center pb-10">
            <GatsbyImage image={data.moff.childImageSharp.gatsbyImageData} alt="Moff Gideon" />
            <h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Moff Gideon</h3>
              <p className="pb-7 text-lg mx-8">Moff Gideon to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              <Link to="/characters/moff-gideon"><button className="darksidebtn">View Bio</button></Link>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

export const DarkSideBios = graphql ` 
query {
  darthvader: file(relativePath: {eq: "darth-vader-bio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthmaul: file(relativePath: {eq: "maul-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthsidious: file(relativePath: {eq: "darth-sidious.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  kyloren: file(relativePath: {eq: "kylo-ren-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  starkiller: file(relativePath: {eq: "starkiller-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  countdooku: file(relativePath: {eq: "count-dooku-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  generalgrevious: file(relativePath: {eq: "general-grevious-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  snoke: file(relativePath: {eq: "snoke-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  assajj: file(relativePath: {eq: "assajj-ventress-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  bb9e: file(relativePath: {eq: "bb9e-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  droideka: file(relativePath: {eq: "droideka-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  ig88: file(relativePath: {eq: "ig88-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  magna: file(relativePath: {eq: "magna-guards-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  savageoppress: file(relativePath: {eq: "savage-oppress-bio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  grandinq: file(relativePath: {eq: "grand-inq-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  b1droid: file(relativePath: {eq: "b1-droid-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthmalek: file(relativePath: {eq: "darth-malek-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  b2battledroid: file(relativePath: {eq: "b2-battle-droid.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  captainphasma: file(relativePath: {eq: "captain-phasma-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darktrooper: file(relativePath: {eq: "dark-trooper-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthmalgus: file(relativePath: {eq: "darth-malgus-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthnil: file(relativePath: {eq: "darth-nil-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthrevan: file(relativePath: {eq: "darth-revan-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthsion: file(relativePath: {eq: "darth-sion-bio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthtalon: file(relativePath: {eq: "darth-talon-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  darthtraya: file(relativePath: {eq: "darth-traya.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  deathtrooper: file(relativePath: {eq: "death-trooper-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  directorkrennic: file(relativePath: {eq: "director-krennic-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  gamguardnew: file(relativePath: {eq: "gamorrean-bio-new.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  firstorderex: file(relativePath: {eq: "first-order-ex-bio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  generalhux: file(relativePath: {eq: "general-hux-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  grandtarkin: file(relativePath: {eq: "tarkin-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  jangofett: file(relativePath: {eq: "jango-fett-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  jabbahutt: file(relativePath: {eq: "jabba-hutt-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  krr: file(relativePath: {eq: "krrsantan-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
  moff: file(relativePath: {eq: "moff-gideon-bio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
    }
  }
}
`