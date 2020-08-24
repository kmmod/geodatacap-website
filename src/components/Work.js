import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Section } from "./Structure"
import EmblaCarousel from "./EmblaCarousel"
import work from "../styles/work.module.css"
import fonts from "../styles/fonts.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links/index"
import work01 from "../images/work-01.jpg"
import work02 from "../images/work-02.jpg"

const classNames = require("classnames")

const ProjectBox = props => {
  return (
      <div className={work.slide}>
        <div
          className={work.image}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <div className={classNames([work.title, fonts.header])}>
          <h4>{props.title}</h4>
        </div>
        <div className={classNames([work.description, fonts.body])}>
          <p>{props.content}</p>
        </div>
        <div className={classNames([work.follow, fonts.body])}>
          <p>
            <AnchorLink to={""}>{props.follow}</AnchorLink>
          </p>
        </div>
      </div>
  )
}

function Work() {
  return (
    <Section>
      <Container>
        <div id={"work"} style={{position: "absolute", top:"-3rem"}}/>
        <div className={work.wrapper}>
          <Fade clear cascade>
            <div className={fonts.header}>
              <h2>Completed projects</h2>
            </div>
          </Fade>
        </div>
      </Container>
      <div className={work.carousel}>
        <EmblaCarousel>
          <ProjectBox
            image={work01}
            title={"Personalized Shopping with Countr"}
            content={
              "Countr is a personalized shopping app that enables its users to shop with their friends, receive trusted recommendations, showcase their style, and earn money for their taste – all in one place. When it comes to ML, we delivered the recommendation and feed-generation functionalities and improved the user search experience."
            }
            follow={"Case study..."}
          />
          <ProjectBox
            image={work02}
            title={"Speech-to-Text transcription with CocoonWeaver"}
            content={
              "We have designed an intuitive UX and developed a neural network that, together with Siri, enables the app to perform speech-to-text transcription and produce notes with correct grammar and punctuation."
            }
            follow={"Case study..."}
          />
          <ProjectBox
            image={work01}
            title={"Audio recognition with Baby Guard"}
            content={
              "To achieve a high performance, we used custom audio processing algorithms and neural networks to handle the classification of the signal. The system can detect a baby’s cry rapidly and accurately. Our designers handled the UX to make the app easy and intuitive to use."
            }
            follow={"Case study..."}
          />
          <ProjectBox
            image={work02}
            title={"Data-driven SME lending platform provider"}
            content={
              "Finiata provides access to liquidity and insights into cashflow for small businesses in Europe so they can focus on what matters"
            }
            follow={"Case study..."}
          />
        </EmblaCarousel>
      </div>
    </Section>
  )
}

export default Work
