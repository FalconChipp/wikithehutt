import React from "react";
import { siteMetadata } from "../../gatsby-config";

export default function VaderSeo() {

    const pageDescription = "Page 1 Description"
    const pageTitle = "Page 1 Title"
    const keywords = ["keyword1", "keyword2", "keyword3"]

    return (
        <>

        <title>{pageTitle} | {siteMetadata.title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:locale" content={siteMetadata.locale} />

        {/* <meta name="robots" content="index, follow" /> */}
        </>
    )
}

export function AaylaSeo() {

    const pageDescription = "Page 2 Description"
    const pageTitle = "Page 2 Title"
    const keywords = ["hire wix developer", "support 1", "keyword6"]

    return (
        <>

        <title>{pageTitle} | {siteMetadata.title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />

        {/* <meta name="robots" content="index, follow" /> */}
        </>
    )
}
