import React from "react";
import Layout from "../components/Layout";
import "../styles/kylohp.css"; 
import "../styles/keyframes.css"
import KyloAni from "../components/KyloAnimation";
import { siteMetadata } from "../../gatsby-config";
import { Link } from "gatsby";

export const Head = () => <title>{siteMetadata.title}</title>
export default function Home() {
    return (
      <Layout>
			<section>
				<div className="grid grid-cols-3">
					<div className="text-white">
						<h2 className="font-dosis text-5xl text-center pt-[50%]">Welcome to Wiki The <br></br>Jedi Archives</h2>
					</div>
					<div className="max-h-[835px]"><KyloAni /></div>
					<div className="text-white">
						<h2 className="font-dosis text-5xl text-center pt-[50%]">A Full Wikipedia for Star Wars Nerds</h2>
					</div>
				</div>
			</section>

			<section>
				<h2 className="font-dosis text-3xl text-center text-white">Featured Bios</h2>
				<div className="grid grid-cols-3">
					<div className="pb-10 text-center" >
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Col 1</h3>
              			<p className="pb-7 text-lg mx-8">Darth Sion to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              			<Link to="/characters/darth-sion"><button className="darksidebtn">View Bio</button></Link>
					</div>
					<div className="pb-10 text-center">
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Col 2</h3>
              			<p className="pb-7 text-lg mx-8">Darth Sion to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              			<Link to="/characters/darth-sion"><button className="darksidebtn">View Bio</button></Link>
					</div>
					<div className="pb-10 text-center">
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Col 3</h3>
              			<p className="pb-7 text-lg mx-8">Darth Sion to go here with intro text and then to also have an image of him and once they have clicked on him it would take them to his individual page.</p>
              			<Link to="/characters/darth-sion"><button className="darksidebtn">View Bio</button></Link>
					</div>
				</div>
			</section>
      </Layout>
    )
  }