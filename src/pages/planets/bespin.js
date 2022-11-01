import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Bespin</title>
export default function Bespin() {
    return (
        <Layout>
            <h1>Bespin</h1>
        </Layout>
    )
} 