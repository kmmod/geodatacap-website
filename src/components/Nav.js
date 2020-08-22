import React, { useState } from "react"
import { Container } from "./Structure"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useScrollPosition } from "./useScrollPosition"
import nav from "../styles/nav.module.css"
import fonts from "../styles/fonts.module.css"

function Nav() {
  const [hide, setHide] = useState(false)
  const classNames = require("classnames")

  useScrollPosition(({ prevPos, currPos }) => {
    if (hide === false && currPos.y < -30) {
      setHide(true)
    } else if (hide === true && currPos.y > -30) {
      setHide(false)
    }
  })

  return (
    <div
      style={{
        zIndex: "100",
        position: "fixed",
        width: "100%",
        height: hide ? "3rem" : "8rem",
        backgroundColor: hide
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0)",
        transition: "all 0.5s ease",
      }}
    >
      <Container>
        <nav className={classNames([nav.wrapper, fonts.nav])}>
          <div className={nav.left}>
            <p>GEO.DATACAP</p>
          </div>
          <div className={nav.right}>
            <p>
              <AnchorLink to={"#home"}>Home</AnchorLink>
            </p>
            <p>
              <AnchorLink to={"#about"}>About</AnchorLink>
            </p>
            <p>
              <AnchorLink to={"#services"}>Services</AnchorLink>
            </p>
            <p>
              <AnchorLink to={"#work"}>Work</AnchorLink>
            </p>
            <p>
              <AnchorLink to={"#contact"}>Contact</AnchorLink>
            </p>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
