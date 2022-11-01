import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Geonosis</title>
export default function Geonosis() {
    return (
        <Layout>
            <h1>Geonosis</h1>
        </Layout>
    )
} 