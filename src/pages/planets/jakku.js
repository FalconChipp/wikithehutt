import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Jakku</title>
export default function Jakku() {
    return (
        <Layout>
            <h1>Jakku</h1>
        </Layout>
    )
} 