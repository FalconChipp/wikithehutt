import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";
import { Slice } from "gatsby";

export const Head = () => <title>{siteMetadata.title} - Polis Massa</title>
export default function PolisMassa() {
    return (
        <Layout>
            <h1>Polis Massa</h1>
            <Slice alias="polisContent" />
        </Layout>
    )
} 