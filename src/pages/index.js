import React from "react"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"

const IndexPage = () => (
  <React.Fragment>
    <Nav />
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  </React.Fragment>
)

export default IndexPage
