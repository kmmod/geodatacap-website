import React from "react"
import { Container, Section } from "./Structure"
import { ImCheckmark } from "react-icons/im"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Fade from "react-reveal/Fade"

import about from "../styles/about.module.css"
import fonts from "../styles/fonts.module.css"
import AboutBulb from "./AboutBulb"

function About({ node }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <div className={fonts.header}><h3>{children}</h3></div>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>
          <ImCheckmark />
          {children}
        </li>
      ),
    },
  }

  return (
    <Section>
      <Container>
        <div id={"about"} style={{ position: "absolute", top: "-1rem" }} />
        <div className={about.wrapper}>
          <div className={about.image}>
            <Fade clear>
              <AboutBulb />
            </Fade>
          </div>
          <div className={about.content}>
            <Fade clear cascade>
              <div className={fonts.body}>
                {documentToReactComponents(node.about.json, options)}

              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
