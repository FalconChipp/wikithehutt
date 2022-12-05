import React from "react";
import Layout from "../components/Layout";
import "../styles/kylohp.css"; 
import "../styles/keyframes.css";
import KyloAni from "../components/KyloAnimation";
import { siteMetadata } from "../../gatsby-config";
import { Link } from "gatsby";

export const Head = () => <title>{siteMetadata.title}</title>

export default function Home( {data} ) {
    return (
      <Layout>
		{/* <SEO /> */}
			<section>
				<div className="grid mobile:grid-cols-1 tabletLand:grid-cols-1 laptop:grid-cols-3">
					<div className="text-white">
						<h2 className="font-dosis mobile:text-3xl laptop:text-5xl text-center mx-[10%] laptop:pt-[50%] mobile:mb-7">Welcome to The Jedi Archives</h2>
					</div>
					<div className="mobile:pb-10 mobile:mt-5 laptop:max-h-[835px] mobile:max-h-[60vh]"><KyloAni /></div>
					<div className="text-white">
							<h2 className="font-dosis mobile:text-3xl laptop:text-5xl text-center mx-[10%] laptop:pt-[50%] mobile:pt-0">A Full Wikipedia for Star Wars Nerds</h2>
					</div>
				</div>
			</section>

			<section>
				<h2 className="font-dosis text-3xl text-center text-white">Featured Bios</h2>
				<div className="grid mobile:grid-cols-1 tabletLand:grid-cols-2 laptop:grid-cols-4 gap-5 pb-5 px-8">
					<div className="saberGlowLight pb-10 text-center" >
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Featured Character</h3>
              			<p className="pb-7 text-lg mx-8">Short Bio Desc</p>
              			<Link to="#"><button className="darksidebtn">View Bio</button></Link>
					</div>
					<div className="saberGlowLight pb-10 text-center">
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Featured Weapon</h3>
              			<p className="pb-7 text-lg mx-8">Short Bio Desc</p>
              			<Link to="/#"><button className="darksidebtn">View Bio</button></Link>
					</div>
					<div className="saberGlowLight text-center pb-10">
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Featured Planet</h3>
              			<p className="pb-7 text-lg mx-8">Short Bio Desc</p>
              			<Link to="#"><button className="darksidebtn">View Bio</button></Link>
					</div>
					<div className="saberGlowLight text-center pb-10">
						{/* <GatsbyImage image={data.[image name].childImageSharp.gatsbyImageData} alt="[image alt]" /> */}
            			<h3 className="text-center font-jedi text-2xl text-white pb-5 pt-5 underline">Featured Ship</h3>
              			<p className="pb-7 text-lg mx-8">Short Bio Desc</p>
              			<Link to="#"><button className="darksidebtn">View Bio</button></Link>
					</div>
				</div>
			</section>
      </Layout>
    )
  }

