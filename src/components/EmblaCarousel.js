import React, { useCallback, useEffect, useState } from "react"

import { NextButton, PrevButton } from "./EmblaCarouselButtons"

import { useEmblaCarousel } from "embla-carousel/react"
import style from "../styles/embla.module.css"

function EmblaCarousel(props) {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (embla) {
      onSelect()
      embla.on("select", onSelect)
    }
  }, [embla, onSelect])

  return (
    <div className={style.embla}>
      <EmblaCarouselReact classname={style.embla__viewport}>
        <div className={style.embla__container}>
          {props.children
            ? props.children.map((item, index) => {
                return (
                  <div className={style.embla__slide} key={index}>
                    {item}
                  </div>
                )
              })
            : null}
        </div>
      </EmblaCarouselReact>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}

export default EmblaCarousel
