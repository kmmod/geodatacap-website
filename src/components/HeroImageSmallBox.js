import React from "react"
import style from "../styles/heroImageSmallBox.module.css"

function HeroImageSmallBox(props) {
  const classNames = require("classnames")

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: `translateX(0) translateY(0)`,
      }}
    >
      <div className={style.boxBase}>
        <div className={style.baseInset} />
        <div className={style.boxHover}>
          <div
            className={classNames([style.bottomOne, style.plane, style.edge])}
          />
          <div
            className={classNames([style.centerOne, style.plane, style.middle])}
          />
          <div
            className={classNames([style.centerTwo, style.plane, style.middle])}
          />
          <div
            className={classNames([
              style.centerThree,
              style.plane,
              style.middle,
            ])}
          />
          <div
            className={classNames([
              style.centerFour,
              style.plane,
              style.middle,
            ])}
          />

          <div
            className={classNames([style.topOne, style.plane, style.edge])}
          />
          <div className={classNames([style.topTwo, style.plane, style.edge])}>
            <div className={style.topInset}>
              <div className={style.icon}>
                {props.icon ? <img src={props.icon} alt="icon" /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageSmallBox
