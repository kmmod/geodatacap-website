import React from "react"
import { Container, Section } from "./Structure"
import contact from "../styles/contact.module.css"
import fonts from "../styles/fonts.module.css"

import Fade from "react-reveal/Fade"
import HeroImageBrain from "./HeroImageBrain"

function Contact() {
  return (
    <Section>
      <div id={"contact"} style={{ position: "absolute", top: "-2rem" }} />
      <div className={contact.background} />
      <Container>
        <div className={contact.wrapper}>
          <Fade clear cascade>
            <div className={fonts.header}>
              <h2>We would love to hear from you</h2>
            </div>
          </Fade>

          <div className={contact.content}>
            <div className={fonts.body}>
              <Fade clear cascade>
                <form action={"#"} className={contact.contactForm}>
                  <label for="firstname">
                    <p>First Name</p>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required=""
                  />
                  <label for="lastname">
                    <p>Last Name</p>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required=""
                  />
                  <label htmlFor="email">
                    <p>Email</p>
                  </label>
                  <input type="email" id="email" name="email" required="" />
                  <label htmlFor="company">
                    <p>Company Name</p>
                  </label>
                  <input type="text" id="Company" name="Company" required="" />
                  <div className={contact.checkbox}>
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      value="consent"
                    />
                    <label for="consent" data-content="consent">
                      <p>
                        I agree to receive other marketing communications from
                        GEO.DATACAP
                      </p>
                    </label>
                  </div>

                  <div className={contact.consentinfo}>
                    <p>
                      You can unsubscribe from these communications at any time.
                      For more information on how to unsubscribe, our privacy
                      practices please view our Privacy Policy.
                    </p>
                  </div>
                  <button>
                    <p>Submit</p>
                  </button>
                </form>
              </Fade>
            </div>
            <div className={contact.image}>
              <HeroImageBrain/>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
