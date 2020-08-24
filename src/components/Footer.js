import React from "react"
import { Container, Section } from "./Structure"
import footer from "../styles/footer.module.css"

import fonts from "../styles/fonts.module.css"

function Footer() {
  const classNames = require("classnames")

  return (
    <Section>
      <div className={footer.background}/>
      <Container>
        <div className={classNames([footer.wrapper, fonts.body])}>
          <p>GEO.DATACAP</p>
        </div>
      </Container>
    </Section>
  )
}

export default Footer