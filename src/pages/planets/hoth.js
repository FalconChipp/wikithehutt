import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";
import { Slice } from "gatsby";

export const Head = () => <title>{siteMetadata.title} - Hoth</title>
export default function Hoth() {
    return (
        <Layout>
            <h1>Hoth</h1>
            <Slice alias="hothContent" />
        </Layout>
    )
} 