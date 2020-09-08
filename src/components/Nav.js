import React, { useEffect, useState } from "react"
import { Container } from "./Structure"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useScrollPosition } from "./useScrollPosition"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import GeodataCapLogo from "./Logo"
import Language from "./Language"
import nav from "../styles/nav.module.css"
import fonts from "../styles/fonts.module.css"
import { FormattedMessage } from "gatsby-plugin-intl/index"

function Nav() {
  const [hide, setHide] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const classNames = require("classnames")

  useScrollPosition(({ prevPos, currPos }) => {
    if (hide === false && currPos.y < -30) {
      setHide(true)
    } else if (hide === true && currPos.y > -30) {
      setHide(false)
    }
  })

  useEffect(() => {
    if (mobileOpen) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      disableBodyScroll(document.body)
    } else if (!mobileOpen) {
      enableBodyScroll(document.body)
      document.getElementsByTagName("html")[0].style = ""
    }
  }, [mobileOpen])

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
          <div className={classNames([nav.left])}>
            <AnchorLink to={"#home"}>
              <GeodataCapLogo
                style={classNames([nav.logo, hide ? null : nav.logoUp])}
              />
              <p>GEO.DATACAP</p>
            </AnchorLink>
          </div>
          <div className={nav.mobileIcon}>
            {mobileOpen ? (
              <div
                className={nav.navopen}
                onClick={() => {
                  setMobileOpen(false)
                }}
                role="presentation"
              >
                <AiOutlineClose />
              </div>
            ) : (
              <div
                className={nav.navopen}
                onClick={() => {
                  setMobileOpen(true)
                }}
                role="presentation"
              >
                <AiOutlineMenu />
              </div>
            )}
          </div>
          <div
            className={classNames([nav.right, mobileOpen ? null : nav.navOpen])}
          >
            <p
              onClick={() => {
                setMobileOpen(false)
              }}
              role="presentation"
            >
              <AnchorLink to={"#about"}>
                <FormattedMessage id="nav.about" />
              </AnchorLink>
            </p>
            <p
              onClick={() => {
                setMobileOpen(false)
              }}
              role="presentation"
            >
              <AnchorLink to={"#services"}>
                <FormattedMessage id="nav.services" />
              </AnchorLink>
            </p>
            <p
              onClick={() => {
                setMobileOpen(false)
              }}
              role="presentation"
            >
              <AnchorLink to={"#contact"}>
                <FormattedMessage id="nav.contact" />
              </AnchorLink>
            </p>
            <div className={nav.language}>
              <Language />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
