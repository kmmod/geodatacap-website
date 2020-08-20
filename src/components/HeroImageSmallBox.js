import React from "react"
import style from "../styles/heroImageSmallBox.module.css"

function HeroImageSmallBox(props) {
  const classNames = require("classnames")

  const pos = () => {
    switch (props.position) {
      case 1:
        return style.positionOne
      case 2:
        return style.positionTwo
      default:
        return style.positionThree
    }
  }

  return (
    <div className={classNames([style.boxBase, pos()])}>
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
          className={classNames([style.centerThree, style.plane, style.middle])}
        />
        <div
          className={classNames([style.centerFour, style.plane, style.middle])}
        />

        <div className={classNames([style.topOne, style.plane, style.edge])}>
          <div className={style.topInset}>
            <div
              className={classNames([
                style.icon,
                props.animated ? style.iconFlash : null,
              ])}
            >
              {props.icon ? props.icon : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageSmallBox
