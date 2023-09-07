import React from 'react'
import { styled } from 'styled-components'
import SlideImage from '/bg.png'
import VRIcon from '/vricon.png'
import MobileIcon from '/mobileicon.png'
import ThreeIcon from '/360icon.png'
import { Smartphone } from '@mui/icons-material'
import PhoneIcon from '/smart.png'
import PlayIcon from '/play.svg'

const Slide = styled.div`
  height: calc(85vh - 60px);
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
  @media only screen and (max-width: 480px) {
    padding: 0.2rem 1.2rem;
    line-height: 70px;
  }
`
const SlideBoxesTwo = styled(SlideBoxes)`
  margin-top: 8rem;
  @media only screen and (max-width: 480px) {
    margin-top: 6rem;
  }
`
const SlideBoxesThree = styled(SlideBoxes)`
  margin-top: 16rem;
  @media only screen and (max-width: 480px) {
    margin-top: 12rem;
  }
`
const SlideText = styled.span`
  font-size: 3rem;
  font-weight: 600;
  height: 100%;
  width: 100%;
  color: #e30a0a;
  @media only screen and (max-width: 480px) {
    font-size: 2.1rem;
  }
`
const SlideTextTwo = styled(SlideText)`
  font-size: 2rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`
const SlideTextThree = styled(SlideText)`
  font-size: 1.6rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`
const SlideTextOther = styled.span`
  font-size: 3rem;
  font-weight: 600;
  height: 100%;
  width: 100%;
  color: #000000;
  margin-left: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`
const SlideTextOtherTwo = styled(SlideTextOther)`
  font-size: 2rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`
const SlideTextOtherThree = styled(SlideTextOther)`
  font-size: 1.6rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`
const SlideIcon = styled.img`
  width: 70px;
  margin-left: 10px;
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`
const DownloadOptions = styled.div`
  display: flex;
  position: absolute;
  bottom: 2%;
  z-index: 999;
  background-color: #fffdfd;
  border-radius: 20px;
  border: 2px solid #2c2c2c;
  color: #323232;
  padding: 0.5rem;
  left: 5%;
  min-width: 250px;
`
const DownloadOptionsTwo = styled(DownloadOptions)`
  bottom: 17%;
  left: 5%;
`
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
const InfoDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 1.2rem;
`
const InfoTop = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`
const InfoBottom = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
const IconImg = styled.img`
  width: 40px;
`

const Slider = () => {
  return (
    <Slide>
      <DownloadOptions>
        <IconBox>
          <IconImg src={PhoneIcon} />
        </IconBox>
        <InfoDown>
          <InfoTop>Available on</InfoTop>
          <InfoBottom>App Store</InfoBottom>
        </InfoDown>
      </DownloadOptions>
      <DownloadOptionsTwo>
        <IconBox>
          <IconImg src={PlayIcon} />
        </IconBox>
        <InfoDown>
          <InfoTop>Available on</InfoTop>
          <InfoBottom>Play Store</InfoBottom>
        </InfoDown>
      </DownloadOptionsTwo>
      <SlideImg src={SlideImage} />
      <SlideBoxes>
        <SlideText>Virtual </SlideText>
        <SlideTextOther>Reality</SlideTextOther>
        <SlideIcon src={VRIcon} />
      </SlideBoxes>
      <SlideBoxesTwo>
        <SlideTextTwo>Augmented </SlideTextTwo>
        <SlideTextOtherTwo>Reality</SlideTextOtherTwo>
        <SlideIcon src={MobileIcon} style={{ width: '50px' }} />
      </SlideBoxesTwo>
      <SlideBoxesThree>
        <SlideTextThree>360 </SlideTextThree>
        <SlideTextOtherThree>Virtual </SlideTextOtherThree>
        <SlideTextThree style={{ marginLeft: '10px' }}>Tours</SlideTextThree>
        <SlideIcon src={ThreeIcon} />
      </SlideBoxesThree>
    </Slide>
  )
}

export default Slider
