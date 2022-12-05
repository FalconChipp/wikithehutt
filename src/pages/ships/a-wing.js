import React from "react";
import Layout from "../../components/Layout";
import { Link, graphql, Slice } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

export const Head = () => <title>A-Wing</title>
export default function AWing({data}) {
    return (
        <Layout>
            <section className="w-full grid">
                <h1 className="text-white text-center font-jedi text-6xl pt-5 pb-10">A-Wing</h1>
                <div className="grid grid-cols-2 gap-5 container-center">
                    <div>
                        <GatsbyImage image={data.awing.childImageSharp.gatsbyImageData} alt="A Wing"/>
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
                    <Slice alias="awingContent" />
            </section>
        </Layout>
    );
}

export const Images = graphql `
    query {
        awing: file(relativePath: {eq: "a-wing.jpeg"}) {
            ...ImageSettings
        }
    }
`