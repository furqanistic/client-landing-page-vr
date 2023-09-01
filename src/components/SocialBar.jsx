import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

const Social = styled.div`
  height: 40px;
  background-color: #ffffff85;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const SocialBar = () => {
  return (
    <Social>
      <FacebookOutlined style={{ fontSize: '2rem' }} />
      <Instagram style={{ fontSize: '2rem' }} />
      <Twitter style={{ fontSize: '2rem' }} />
      <LinkedIn style={{ fontSize: '2rem' }} />
      <YouTube style={{ fontSize: '2rem' }} />
    </Social>
  )
}

export default SocialBar
