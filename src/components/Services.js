import React from "react"
import { Container, Section } from "./Structure"
import ServicesBg from "./ServicesBg"
import Fade from "react-reveal/Fade"
import { AiOutlineBulb, AiOutlineDatabase, AiOutlineShoppingCart, AiOutlineLaptop, AiOutlinePartition } from "react-icons/ai"

import services from "../styles/services.module.css"
import fonts from "../styles/fonts.module.css"

const DataBox = props => {
  return (
    <Fade clear cascade>

    <div className={services.container}>
      {props.breakline ? <div className={services.breakline} /> : null}

      {props.icon ? props.icon : null}

      <div className={fonts.header}>
        <h4>{props.header}</h4>
      </div>
      <div className={fonts.body}>
        <p>{props.content}</p>
      </div>
    </div>
    </Fade>
  )
}

function Services() {
  return (
    <Section>
      <ServicesBg />
      <Container>
        <div id={"services"} style={{position: "absolute", top:"-2rem"}}/>
          <div className={services.wrapper}>
            <DataBox
              breakline={false}
              header={
                <>
                  Digital agency <b>services & solutions</b>
                </>
              }
              content={
                "Our consultants opt in to the projects they genuinely want to work on"
              }
            />
            <DataBox
              breakline={true}
              icon={<AiOutlineDatabase />}
              header={"Data Preparation"}
              content={"Prepare your data to make the most of AI algorithms."}
            />
            <DataBox
              breakline={true}
              icon={<AiOutlineBulb />}
              header={"AI Development"}
              content={
                "Find meaningful insight to improve your product or service"
              }
            />
            <DataBox
              breakline={true}
              icon={<AiOutlineShoppingCart />}
              header={"Digital Ecommerce"}
              content={
                "Create a personalized experience for every user based on real world data."
              }
            />
            <DataBox
              breakline={true}
              icon={<AiOutlineLaptop />}
              header={"Consumer technology"}
              content={
                "Find meaningful insight to improve your product or service"
              }
            />
            <DataBox
              breakline={true}
              icon={<AiOutlinePartition />}
              header={"Big Data Service"}
              content={
                "Build natural interactions with your users and identify patterns in unstructured data."
              }
            />
          </div>
      </Container>
    </Section>
  )
}

export default Services
