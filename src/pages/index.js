import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Cookies from "../components/Cookies"

const IndexPage = ({data, intl}) => {
  const node = data.allContentfulMain.nodes.slice(0, 1).pop()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })}
           description={intl.formatMessage({id: "description"})}/>
      <Nav/>
      <main>
        <Hero node={node}/>
        <About node={node}/>
        <Services node={node}/>
        <Contact node={node}/>
        <Footer/>
      </main>
      <Cookies/>
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
          serviceIcon {
            file {
              url
            }
          }
          serviceDescription {
            json
          }
        }
        contact {
          json
        }
        contactConsent {
          json
        }
      }
    }
  }

`

export default injectIntl(IndexPage)
