import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage} from 'gatsby-plugin-image'; 
import { graphql, Link } from "gatsby";
import { lscroll } from "../components/SideScroll";

export const Head = () => <title>Timeline</title>
export default function Timeline() {
    return (
      <Layout>
      <section>
        <div>Demo 3</div>
      </section>
    </Layout>
    )
  }