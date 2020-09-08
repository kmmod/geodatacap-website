import React, { useEffect, useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

const Cookies = () => {
  const [hide, setHide] = useState(false)

  useEffect(()=> {
    if (localStorage.getItem("cookiesCompliance") === "1") {
      setHide(true)
    }
  }, [])

  const setCookieState = () => {
    localStorage.setItem("cookiesCompliance", "1");
    setHide(true)
  }

  return (
    <div
      style={{
        zIndex: "10",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        color: "white",
        padding: "0.5rem 1rem",
        display: hide ? "none" : "flex",
        justifyContent: "center"
      }}
    >
      <p
        style={{
          fontSize: "0.8rem",
          lineHeight: "0.9rem",
          paddingRight: "0.5rem",
        }}
      >
        <FormattedMessage id="cookies.content" />
      </p>
      <button onClick={() => setCookieState()} style={{
        border: "none",
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: "white",
        fontSize: "0.8rem",
        lineHeight: "0.9rem",
        padding: "0.1rem 1rem",

      }}>
        <FormattedMessage id="cookies.accept" />
      </button>
    </div>
  )
}

export default Cookies
