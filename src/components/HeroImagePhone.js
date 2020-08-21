import React, { useEffect, useRef } from "react"
import style from "../styles/heroImagePhone.module.css"
import HeroImageBrain from "./HeroImageBrain"

function HeroImagePhone() {
  const circles = useRef()
  const classNames = require("classnames")

  useEffect(() => {
    for (let i = 0; i < circles.current.children.length; i++) {
      const randomDelay = Math.random()
      circles.current.children[i].style.cssText = `animation-delay: ${
        randomDelay * 2 + "s"
      }; animation-duration: ${randomDelay + 1 + "s"}`
    }
  }, [])

  return (
    <div className={style.phone}>
      <div className={classNames([style.stack, style.first])} />
      <div className={classNames([style.stack, style.second])} />
      <div className={style.frame}>
        <div className={style.top}>
          <div className={style.screen}>
            <div className={style.notch}>
              <div className={style.line} />
              <div className={style.dot} />
            </div>
            <div className={style.mainCircle}>
              <div className={style.beam} />
              <div className={classNames([style.beam, style.beamSecond])} />
              <div className={classNames([style.beam, style.beamThird])} />
              <div className={style.brain}>
                <HeroImageBrain />
              </div>
            </div>
            <div ref={circles} className={style.circlesContainer}>
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
              <div className={style.circle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImagePhone

