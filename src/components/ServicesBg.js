import React from "react"
import services from "../styles/services.module.css"

function ServicesBg() {
  return (
    <div className={services.background}>
      <div className={services.bgfill}/>
      <div className={services.vector}>
        <svg
          width="100%"
          height="auto"
          version="1.1"
          viewBox="0 0 56.25 4.467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-312.8 -104.7)" fill="none">
            <path d="m312.8 109.1c15.77-3.876 40.62-5.876 56.25-2.738v2.92h-56.25z"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default ServicesBg