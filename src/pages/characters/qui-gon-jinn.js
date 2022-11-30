import React from "react";
import Layout from "../../components/Layout";
import { Link, graphql , Slice } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Head = () => <title>Qui-Gon Jinn</title>
export default function QuiGonJinn({data}) {
    return (
        <Layout>
            <section className="w-full grid">
                <h1 className="text-white text-center font-jedi text-6xl pt-5 pb-10">Qui-Gon Jinn</h1>
                <div className="grid grid-cols-2 gap-5 container-center">
                    <div>
                        <GatsbyImage image={data.quigon.childImageSharp.gatsbyImageData} alt="qui gon"/>
                    </div>
                    <div className="align-center">
                        <h3 className="text-white font-dosis text-4xl">Alignment: </h3>
                        <h3 className="text-white font-dosis text-4xl">Weapons:</h3>
                        <h3 className="text-white font-dosis text-4xl">Planet of origin:</h3>
                        <h3 className="text-white font-dosis text-4xl">Relationships:</h3>
                        <h3 className="text-white font-dosis text-4xl">Cause Of Death:</h3>
                        <h3 className="text-white font-dosis text-4xl">Species:</h3>
                        <h3 className="text-white font-dosis text-4xl">Affiliations:</h3>
                        <Link to="#"><h3 className="text-white font-dosis text-4xl pt-5 underline">View Timeline</h3></Link>
                    </div>
                </div>
                <Slice alias="quiContent"/>
            </section>
        </Layout>
    );
}

export const Images = graphql `
    query {
        quigon: file(relativePath: {eq: "qui-gon-bio.jpg"}) {
            ...ImageSettings
        }
    }
`