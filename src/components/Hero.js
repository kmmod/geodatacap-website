import React from "react"
import { Container, Section } from "./Structure"
import HeroBg from "./HeroBg"
import HeroImage from "./HeroImage"
import Fade from "react-reveal/Fade"
import hero from "../styles/hero.module.css"
import fonts from "../styles/fonts.module.css"

function Hero() {
  return (
    <Section>
      <HeroBg/>
      <Container>
        <div id={"home"}/>

        <div className={hero.wrapper}>
          <div className={hero.title}>
            <Fade clear cascade>
              <div className={fonts.header}>
                <h1>
                  Build an application powered by <b>Machine Learning</b>
                </h1>
                <h3>
                  We develop effective plans to track your customers behaviour
                </h3>
                <div className={hero.button}>
                  <h6>Get in touch</h6>
                </div>
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
