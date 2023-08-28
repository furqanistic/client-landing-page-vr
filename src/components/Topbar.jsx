import React, { useState } from 'react'
import { keyframes, styled } from 'styled-components'
import CompanyIcon from '/homevism.png'
import { Link } from 'react-router-dom'
const Bar = styled.div`
  background-color: #ffffff;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid #e9e9e9;
`
const BarWrap = styled.div`
  width: 100%;
  flex: 7;
  display: flex;
  height: 100%;
`
// LEFT SECTION OF Navbar
const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
  position: sticky;
  top: 0;
`
const Logo = styled.img`
  object-fit: contain;
  width: 150px;
  height: 100%;
  margin-left: 15px;
`
const VerticalLine = styled.div`
  width: 1px;
  height: 40px;
  background-color: #e9e9e9;
  margin-left: 1rem;
`
// MID SECTION OF Navbar

const Mid = styled.div`
  flex: 1;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`
const IconImg = styled.img`
  object-fit: contain;
  width: 17px;
`
// RIGHT SECTION OF Navbar
const Right = styled.div`
  flex: 5;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const CategoryName = styled.p`
  color: #222;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-left: 2rem;
  border-bottom: ${(props) => (props.selected ? '2px solid #e30a0a' : 'none')};

  /* transition: border-bottom 0.3s, color 0.3s; // smooth transition for changes */
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SignUpBtn = styled.div`
  display: flex;
  padding: 4px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #e30a0a;
  color: white;
  font-size: 15px;
  font-weight: 700;
  line-height: 35px;
  margin: 0 2rem;
`

const CategoryWrapper = styled(Link)`
  text-decoration: none;
  color: inherit; // to inherit the color from CategoryName
`

const Navbar = (props) => {
  const [selected, setSelected] = useState('')

  const handleCategoryClick = (category) => {
    setSelected(category)
  }

  const categories = [
    { name: 'WELCOME', link: '/' },
    { name: 'ABOUT US', link: '#' },
    { name: 'SERVICES', link: '#' },
    { name: 'BLOG', link: '#' },
    { name: 'PAGES', link: '#' },
    { name: 'CONTACT US', link: '#' },
    ,
  ]

  return (
    <Bar>
      <BarWrap>
        <Left>
          <Logo src={CompanyIcon} />
        </Left>

        <Right>
          {categories.map((category) => (
            <CategoryWrapper key={category.name} to={category.link}>
              <CategoryName
                selected={selected === category.name}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </CategoryName>
            </CategoryWrapper>
          ))}

          <VerticalLine />

          <SignUpBtn>GET A QUOTE</SignUpBtn>
        </Right>
      </BarWrap>
    </Bar>
  )
}

export default Navbar
