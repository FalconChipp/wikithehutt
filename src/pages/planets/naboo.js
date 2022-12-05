import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";
import { Slice } from "gatsby";

export const Head = () => <title>{siteMetadata.title} - Naboo</title>
export default function Naboo() {
    return (
        <Layout>
            <h1>Naboo</h1>
            <Slice alias="nabooContent" />
        </Layout>
    )
} 