import React from "react"
import HeroImagePhone from "./HeroImagePhone"
import HeroImageSmallBox from "./HeroImageSmallBox"
import {ImSwitch, ImRadioUnchecked} from "react-icons/im"

function HeroImage() {
  return (
    <React.Fragment>
      <HeroImageSmallBox position={1} />
      <HeroImageSmallBox position={2} icon={<ImSwitch/>} animated={true} />
      <HeroImageSmallBox position={3} icon={<ImRadioUnchecked/>} />
      <HeroImagePhone />
    </React.Fragment>
  )
}

export default HeroImage
