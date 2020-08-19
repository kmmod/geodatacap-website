import React from "react"
import { Section, Container } from "./Structure"
import HeroBg from "./HeroBg"
import hero from "../styles/hero.module.css"

function Hero() {
  return (
    <Section>
      <HeroBg/>
      <Container>
        <div className={hero.heroTitle}>
          <p>TEXT</p>
        </div>
      </Container>
    </Section>
  )
}

export default Hero