import React from "react";
import Layout from "../../components/Layout";
// import { graphql, Link } from "gatsby";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Mustafar</title>
export default function Mustafar() {
    return (
        <Layout>
            <h1>Mustafar</h1>
        </Layout>
    )
} 