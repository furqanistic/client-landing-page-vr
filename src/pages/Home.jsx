import React from 'react'
import Topbar from '../components/Topbar'
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs'
import Offer from '../components/Offer'
import Footer from '../components/Footer'
import { styled } from 'styled-components'
import SocialBar from '../components/SocialBar'

const Container = styled.div`
  position: relative;
`

const Top = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 99999;
`

const Home = () => {
  return (
    <Container>
      <Top>
        <Topbar />
        <SocialBar />
      </Top>
      <Slider />
      <AboutUs />
      <Offer />
      <Footer />
    </Container>
  )
}

export default Home
