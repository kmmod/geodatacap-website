import React from "react"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"

const IndexPage = () => (
  <React.Fragment>
    <Nav />
    <main>
      <Hero />
      <About />
    </main>
  </React.Fragment>
)

export default IndexPage
