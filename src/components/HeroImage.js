import React from "react"
import heroImage from "../styles/heroImage.module.css"

function HeroImage() {
  return (
    <div className={heroImage.phone}>
      <div className={heroImage.frame}>
        <div className={heroImage.top}>
          <div className={heroImage.screen}>
            <div className={heroImage.notch}>
              <div className={heroImage.line}/>
              <div className={heroImage.dot}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage