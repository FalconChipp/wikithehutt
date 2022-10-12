import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Mandalore</title>
export default function Mandalore() {
    return (
        <Layout>
            <h1>Mandalore</h1>
        </Layout>
    )
} 