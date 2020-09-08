import React from "react"
import { Container, Section } from "./Structure"
import contact from "../styles/contact.module.css"
import fonts from "../styles/fonts.module.css"
import { FormattedMessage } from "gatsby-plugin-intl"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Fade from "react-reveal/Fade"
import HeroImageBrain from "./HeroImageBrain"

function Contact({ node }) {
  return (
    <Section>
      <div id={"contact"} style={{ position: "absolute", top: "-2rem" }} />
      <div className={contact.background} />
      <Container>
        <div className={contact.wrapper}>
          <Fade clear cascade>
            <div className={fonts.header}>
              {documentToReactComponents(node.contact.json)}
            </div>
          </Fade>

          <div className={contact.content}>
            <div className={fonts.body}>
              <Fade clear cascade>
                <form
                  name="gdc-contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className={contact.contactForm}
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="gdc-contact" />

                  <label for="firstname">
                    <p><FormattedMessage id="contact.name" /></p>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required=""
                  />
                  <label for="lastname">
                    <p><FormattedMessage id="contact.surname" /></p>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required=""
                  />
                  <label htmlFor="email">
                    <p><FormattedMessage id="contact.email" /></p>
                  </label>
                  <input type="email" id="email" name="email" required="" />
                  <label htmlFor="company">
                    <p><FormattedMessage id="contact.company" /></p>
                  </label>
                  <input type="text" id="Company" name="Company" required="" />
                  <div className={contact.checkbox}>
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      value="consent"
                    />
                    <label for="consent" data-content="consent">
                      <p>
                        {documentToReactComponents(node.contactConsent.json)}
                      </p>
                    </label>
                  </div>


                  <button>
                    <p><FormattedMessage id="contact.submit" /></p>
                  </button>
                </form>
              </Fade>
            </div>
            <div className={contact.image}>
              <HeroImageBrain />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
