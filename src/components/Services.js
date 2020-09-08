import React from "react"
import { Container, Section } from "./Structure"
import ServicesBg from "./ServicesBg"
import Fade from "react-reveal/Fade"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import services from "../styles/services.module.css"
import fonts from "../styles/fonts.module.css"

function Services({ node }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => (
        <div className={fonts.header}>
          <h4>{children}</h4>
        </div>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <div className={fonts.body}>
          <p>{children}</p>
        </div>
      ),
    },
  }

  return (
    <Section>
      <ServicesBg />
      <Container>
        <div id={"services"} style={{ position: "absolute", top: "-3rem" }} />
        <div className={services.wrapper}>
          {node.serviceList.map((item, index) => (
            <Fade cascade>
              <div className={services.container} key={index}>
                {index > 0 ? <div className={services.breakline} /> : null}
                {item.serviceIcon != null ? (
                  <img src={item.serviceIcon.file.url} alt={"icon"} />
                ) : null}
                {documentToReactComponents(
                  item.serviceDescription.json,
                  options
                )}
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Services
