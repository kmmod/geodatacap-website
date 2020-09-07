import React from "react"
import { Container, Section } from "./Structure"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import HeroBg from "./HeroBg"
import HeroImage from "./HeroImage"
import Fade from "react-reveal/Fade"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import hero from "../styles/hero.module.css"
import fonts from "../styles/fonts.module.css"

function Hero({node}) {

    return (
    <Section>
      <HeroBg/>
      <Container>
        <div id={"home"}/>
        <div className={hero.wrapper}>
          <div className={hero.title}>
            <Fade clear cascade>
              <div className={fonts.header}>
                {documentToReactComponents(node.intro.json)}
                <AnchorLink to={"#contact"}>
                  <div className={hero.button}>
                    <h6>{node.introButton}</h6>
                  </div>
                </AnchorLink>
              </div>
            </Fade>
          </div>
          <div className={hero.image}>
            <div className={hero.imageOffset}>
              <HeroImage/>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
