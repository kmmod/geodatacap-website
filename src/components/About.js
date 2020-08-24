import React from "react"
import { Container, Section } from "./Structure"
import { ImCheckmark } from "react-icons/im"
import Fade from "react-reveal/Fade"

import about from "../styles/about.module.css"
import fonts from "../styles/fonts.module.css"
import AboutBulb from "./AboutBulb"

function About() {

  return (
    <Section>
      <Container>
        <div id={"about"} style={{position: "absolute", top:"-1rem"}}/>
        <div className={about.wrapper}>
          <div className={about.image}>
            <Fade clear>
              <AboutBulb/>
            </Fade>
          </div>
          <div className={about.content}>
            <Fade clear cascade>
              <div className={fonts.header}>
                <h2>
                  About our <b>Machine Learning</b> software firm
                </h2>
              </div>
              <div className={fonts.body}>
                <p>
                  Machine Learning is not only a tech buzzword. It’s widely
                  applied to business, reducing costs or increasing customer
                  satisfaction. ML algorithms can be used in applications across
                  practically all sectors – from ecommerce to finance,
                  healthcare to education, cybersecurity to charity.

                </p>
                <ul>
                  <li>
                    <ImCheckmark/><p>Increase sales</p>
                  </li>
                  <li>
                    <ImCheckmark/><p>Improve productivity</p>
                  </li>
                  <li>
                    <ImCheckmark/><p>Analyse large volumes of data</p>
                  </li>
                  <li>
                    <ImCheckmark/><p>Improve customer satisfaction</p>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
