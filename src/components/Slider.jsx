import React from 'react'
import { styled } from 'styled-components'
import SlideImage from '/bg.png'
import VRIcon from '/vricon.png'
import MobileIcon from '/mobileicon.png'
import ThreeIcon from '/360icon.png'

const Slide = styled.div`
  height: calc(80vh - 60px);
  width: 100%;
  position: relative;
`
const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`
const SlideBoxes = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 2%;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  line-height: 80px;
`
const SlideText = styled.span`
  font-size: 3rem;
  font-weight: 600;
  height: 100%;
  width: 100%;
  color: #e30a0a;
`
const SlideTextTwo = styled(SlideText)`
  font-size: 2rem;
`
const SlideTextThree = styled(SlideText)`
  font-size: 1.6rem;
`
const SlideTextOther = styled.span`
  font-size: 3rem;
  font-weight: 600;
  height: 100%;
  width: 100%;
  color: #000000;
  margin-left: 10px;
`
const SlideTextOtherTwo = styled(SlideTextOther)`
  font-size: 2rem;
`
const SlideTextOtherThree = styled(SlideTextOther)`
  font-size: 1.6rem;
`
const SlideIcon = styled.img`
  width: 70px;
  margin-left: 10px;
`
const Slider = () => {
  return (
    <Slide>
      <SlideImg src={SlideImage} />
      <SlideBoxes>
        <SlideText>Virtual </SlideText>
        <SlideTextOther>Reality</SlideTextOther>
        <SlideIcon src={VRIcon} />
      </SlideBoxes>
      <SlideBoxes style={{ marginTop: '8rem' }}>
        <SlideTextTwo>Augmented </SlideTextTwo>
        <SlideTextOtherTwo>Reality</SlideTextOtherTwo>
        <SlideIcon src={MobileIcon} style={{ width: '50px' }} />
      </SlideBoxes>
      <SlideBoxes style={{ marginTop: '16rem' }}>
        <SlideTextThree>360 </SlideTextThree>
        <SlideTextOtherThree>Virtual </SlideTextOtherThree>
        <SlideTextThree style={{ marginLeft: '10px' }}>Tours</SlideTextThree>
        <SlideIcon src={ThreeIcon} />
      </SlideBoxes>
    </Slide>
  )
}

export default Slider
