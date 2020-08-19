import React from "react"
import main from "../styles/structure.module.css"


export function Section(props) {
  return (
    <div className={main.section}>
      {props.children}
    </div>
  )
}

export function Container(props) {
  return (
    <div className={main.container}>
      {props.children}
    </div>
  )
}