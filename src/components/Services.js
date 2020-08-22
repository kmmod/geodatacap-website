import React from "react"
import { Container, Section } from "./Structure"
import Fade from "react-reveal/Fade"
import services from "../styles/services.module.css"
import fonts from "../styles/fonts.module.css"
import tempimage from "../images/gatsby-icon.png"

function Services() {
  const databox = (
    <React.Fragment>
      <div className={services.breakline} />

      <img src={tempimage} alt={""} />

      <div className={fonts.header}>
        <h4>Data preparation</h4>
      </div>
      <div className={fonts.body}>
        <p>
          Our consultants opt in to the projects they genuinely want to work on.
        </p>
      </div>
    </React.Fragment>
  )

  return (
    <Section>
      <div className={services.background} />
      <Container>
        <div id={"home"} />
        <div className={services.wrapper}>
          <Fade clear cascade>
            <div className={services.container}>
              <div className={fonts.header}>
                <h4>
                  Digital agency <b>services & solutions</b>
                </h4>
              </div>
              <div className={fonts.body}>
                <p>
                  Our consultants opt in to the projects they genuinely want to
                  work on
                </p>
              </div>
            </div>
            <div className={services.container}>{databox}</div>
            <div className={services.container}>{databox}</div>
            <div className={services.container}>{databox}</div>
            <div className={services.container}>{databox}</div>
            <div className={services.container}>{databox}</div>
          </Fade>
        </div>
      </Container>
    </Section>
  )
}

export default Services
