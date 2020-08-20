import React from "react"
import { Section, Container } from "./Structure"
import HeroBg from "./HeroBg"
import HeroImage from "./HeroImage"
import hero from "../styles/hero.module.css"
import fonts from "../styles/fonts.module.css"

function Hero() {
  return (
    <Section>
      <HeroBg />
      <Container>
        <div className={hero.wrapper}>
          <div className={hero.title}>
            <div className={fonts.header}>
              <h1>
                Build an application powered by Machine Learning
              </h1>
            </div>
          </div>
          <div className={hero.image}>
            <HeroImage />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
