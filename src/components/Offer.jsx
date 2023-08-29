import React from 'react'
import { styled } from 'styled-components'
import ImgOne from '/Group 13.png'
import { OfferData } from '../content.js'
const About = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  padding: 6rem 3rem;

  text-align: center;
`
const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: #383838;
  text-align: center;
  margin-bottom: 10rem;
`
const Services = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`
const ServicesItem = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 500px;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  border-radius: 30px;
  padding-bottom: 2rem;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
`
const Service = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem;
`
const ServiceImage = styled.img`
  width: 170px;
  height: 250px;
  object-fit: cover;
  position: absolute;
  top: -25%;
  border-radius: 40px;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
`
const ServiceName = styled.span`
  font-size: 1rem;
  color: red;
`
const Offer = () => {
  return (
    <About>
      <Title>WHAT WE OFFER</Title>
      <Services>
        {OfferData.map((item) => (
          <>
            <ServicesItem key={item.id}>
              <ServiceImage src={item.img} />
              <Service>{item.Text}</Service>
            </ServicesItem>
          </>
        ))}
      </Services>
    </About>
  )
}

export default Offer
