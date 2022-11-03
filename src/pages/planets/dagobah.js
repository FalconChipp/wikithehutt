import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Dagobah</title>
export default function Dagobah() {
    return (
        <Layout>
            <h1>Dagobah</h1>
        </Layout>
    )
} 