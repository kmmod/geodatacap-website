import React, { useEffect, useRef } from "react"
import heroImage from "../styles/heroImage.module.css"

function HeroImage() {
  const circles = useRef()
  const classNames = require("classnames")

  useEffect(() => {
    for (let i = 0; i < circles.current.children.length; i++) {
      const randomDelay = Math.random()
      const elementStyle = `animation-delay: ${
        randomDelay * 2 + "s"
      }; animation-duration: ${randomDelay + 1 + "s"}`
      circles.current.children[i].style.cssText = elementStyle
    }
  }, [])

  return (
    <div className={heroImage.phone}>
      <div className={classNames([heroImage.stack, heroImage.first])} />
      <div className={classNames([heroImage.stack, heroImage.second])} />
      <div className={heroImage.frame}>
        <div className={heroImage.top}>
          <div className={heroImage.screen}>
            <div className={heroImage.notch}>
              <div className={heroImage.line} />
              <div className={heroImage.dot} />
            </div>
            <div ref={circles} className={heroImage.circlesContainer}>
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
              <div className={heroImage.circle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
