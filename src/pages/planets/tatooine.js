import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Tatooine</title>
export default function Tatooine() {
    return (
        <Layout>
            <h1>Tatooine</h1>
        </Layout>
    )
} 