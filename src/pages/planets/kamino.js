import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";
import { Slice } from "gatsby";

export const Head = () => <title>{siteMetadata.title} - Kamino</title>
export default function Kamino() {
    return (
        <Layout>
            <h1>Kamino</h1>
            <Slice alias="kaminoContent" />
        </Layout>
    )
} 