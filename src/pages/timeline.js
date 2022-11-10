import React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage} from 'gatsby-plugin-image'; 
import { graphql, Link } from "gatsby";
import "../styles/timeline.css"
import { Script } from "gatsby";

export const Head = () => <title>Timeline</title>
export default function Timeline() {
    return (
      <Layout>
        <Link className="text-white"to="#2">Next</Link>
      <section className="timeline container1 grid grid-cols-4 scroll" id="1">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
      <Script src="https://thekenwheeler.herokuapp.com/scripts/browserSwipe.js" />
      <Script src="https://thekenwheeler.herokuapp.com/scripts/touchswipe.js" />
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