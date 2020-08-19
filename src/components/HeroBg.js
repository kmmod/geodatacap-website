import React from "react"
import hero from "../styles/hero.module.css"

function HeroBg() {

  const vector = (
    <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(2.882 0 0 4.062 -41.45 59.45)">
        <path
          d="m131.1 14.95c0 15.89 20.56 47.07 49.7 59.75s-41.03 33.58-88.17 33.58c-32 0-52.15-12.12-78.3-12.12 0.0051-9.068 0-110.8 0-110.8h121.1c0 10.71-4.371 13.69-4.371 29.59z"/>
      </g>
    </svg>
  )

  return (
    <div className={hero.backgroundWrapper}>
      <div className={hero.backgroundWave}>
        <div className={hero.backgroundWaveWrapper}>
          <div className={hero.backgroundFill}/>
          {vector}

        </div>
      </div>
    </div>
  )
}

export default HeroBg