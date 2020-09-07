import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = ({data, intl}) => {
  const node = data.allContentfulMain.nodes.slice(0, 1).pop()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })}/>
      <Nav/>
      <main>
        <Hero node={node}/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        <Footer/>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ContentfulMain($locale: String) {
    allContentfulMain(filter: {node_locale: { eq: $locale }}){
      nodes {
        intro {
          json
        }
        introButton
        about {
          json
        }
        serviceList {
          serviceDescription {
            json
          }
        }
        contact {
          json
        }
      }
    }
  }

`

export default injectIntl(IndexPage)
