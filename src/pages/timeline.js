import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage} from 'gatsby-plugin-image'; 
import { Link, graphql } from "gatsby";
import "../styles/timeline.css"

export const Head = () => <title>Timeline</title>
export default function Timeline({ data }) {
    return (
      <Layout>
        <Link className="text-white"to="#2">Next</Link>
      <section className="timeline container1 grid grid-cols-4 scroll" id="1">
        <div className="tl-item">
          <div className="tl-bg"><GatsbyImage image={data.xwing.childImageSharp.gatsbyImageData} alt="x-Wing" /></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>
      </section>

      <section className="timeline container2 grid grid-cols-4 scroll" id="2">

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>
      </section>

      <section className="timeline container3 grid grid-cols-4 scroll">

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg"></div>
          <div className="tl-year">
            <h2>Year</h2>
          </div>
          <div className="tl-content">
            <h3>Title</h3>
            <p>Content</p>
          </div>
        </div>
      </section>
    </Layout>
    )
  }

  export const ImageSettings = graphql `
  fragment ImageSettings on File {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO]
        )
      }
    }
  
  `
 
  export const Images = graphql `
   query {
     xwing: file(relativePath: {eq: "x-wing-bio.png"}) {
       ...ImageSettings
     }
    }
     `