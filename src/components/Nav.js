import React, { useEffect, useState } from "react"
import { Container } from "./Structure"
import nav from "../styles/nav.module.css"
import fonts from "../styles/fonts.module.css"
import { useScrollPosition } from "./useScrollPosition"

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
          ? "rgba(255, 255, 255, 0.95)"
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
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
