import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Coruscant</title>
export default function Coruscant() {
    return (
        <Layout>
            <h1>Coruscant</h1>
        </Layout>
    )
} 