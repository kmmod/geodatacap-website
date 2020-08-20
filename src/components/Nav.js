import React from "react"
import { Container, Section } from "./Structure"
import nav from "../styles/nav.module.css"
import fonts from "../styles/fonts.module.css"

function Nav() {
  const classNames = require("classnames")

  return (
    <Section>
      <Container>
        <div
          className={classNames([nav.wrapper, fonts.nav])}
          style={{ padding: "3rem 0" }}
        >
          <div className={nav.left}>
            <p>GEO.DATACAP</p>
          </div>
          <div className={nav.right}>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Nav