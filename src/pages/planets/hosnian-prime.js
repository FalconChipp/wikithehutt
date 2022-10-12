import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { siteMetadata } from "../../../gatsby-config";

export const Head = () => <title>{siteMetadata.title} - Hosnian Prime</title>
export default function HosnianPrime() {
    return (
        <Layout>
            <h1>Hosnian Prime</h1>
        </Layout>
    )
} 