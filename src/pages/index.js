import React from "react";
import Layout from "../components/Layout";
import "../styles/kylohp.css"; 
import "../styles/keyframes.css"
import KyloAni from "../components/KyloAnimation";
import { siteMetadata } from "../../gatsby-config";

export const Head = () => <title>{siteMetadata.title}</title>
export default function Home() {
    return (
      <Layout>
			<section>
				<div className="grid grid-cols-3">
					<div className="text-white">
						<h2 className="font-dosis text-5xl text-center pt-[50%]">Welcome to Wiki The <br></br>Hutt</h2>
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

				</div>
			</section>
			{/* https://betterprogramming.pub/working-with-3d-model-in-three-js-e228621141af */}
      </Layout>
    )
  }