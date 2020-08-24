import React from "react"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <React.Fragment>
    <Nav />
    <main>
      <Hero />
      <About />
      <Services />
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  </React.Fragment>
)

export default IndexPage
