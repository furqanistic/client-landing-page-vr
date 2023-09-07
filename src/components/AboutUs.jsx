import React from 'react'
import { styled } from 'styled-components'
import VRimage from '/vr2.png'
import { AboutData } from '../content.js'
const About = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 2;
  background-color: white;
  padding: 8rem 3rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 5rem 1rem;
  }
`
const Left = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`
const LeftImage = styled.img`
  width: 100%;
  background-position: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`
const LeftText = styled.p`
  font-size: 7rem;
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  @media only screen and (max-width: 480px) {
    visibility: hidden;
    display: none;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`
const RightBox = styled.span`
  font-size: 1.2rem;
  color: #2e2e2e;
  padding: 0 1.5rem;
  padding-right: 2rem;
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    font-weight: 300;
  }
`
const RightBoxHead = styled.span`
  font-size: 2rem;
  color: #171717;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`
const RightText = styled.p`
  font-size: 7rem;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-weight: 700;
  color: #000000;
  @media only screen and (max-width: 480px) {
    visibility: hidden;
    display: none;
  }
`
const Heading = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  visibility: hidden;
  display: none;
  @media only screen and (max-width: 480px) {
    visibility: visible;
    display: block;
  }
`
const AboutUs = () => {
  return (
    <About>
      <Left>
        <Heading>About Us</Heading>
        <LeftImage src={VRimage} />
        <LeftText>AB</LeftText>
      </Left>
      <Right>
        <RightBoxHead>{AboutData.title}</RightBoxHead>
        <RightBox>{AboutData.description}</RightBox>
        <RightText>OUT US</RightText>
      </Right>
    </About>
  )
}

export default AboutUs
