import styled from 'styled-components'

const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 300px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw; // This will make it take the full width of the viewport
`

const Div = styled.img`
  height: 300px;
  width: 100%;
  padding: 0.2rem;
  object-fit: cover;
`

const Div1 = styled(Div)`
  grid-area: 1 / 1 / 2 / 2;
`

const Div2 = styled(Div)`
  grid-area: 1 / 2 / 2 / 3;
`

const Div3 = styled(Div)`
  grid-area: 1 / 3 / 2 / 4;
`

const Div4 = styled(Div)`
  grid-area: 1 / 4 / 2 / 5;
`

const Div5 = styled(Div)`
  grid-area: 2 / 1 / 3 / 2;
`

const Div6 = styled(Div)`
  grid-area: 2 / 2 / 3 / 3;
`

const Div7 = styled(Div)`
  grid-area: 2 / 3 / 3 / 4;
`

const Div8 = styled(Div)`
  grid-area: 2 / 4 / 3 / 5;
`

const Div9 = styled(Div)`
  grid-area: 3 / 1 / 4 / 2;
`

const Div10 = styled(Div)`
  grid-area: 3 / 2 / 4 / 3;
`

const Div11 = styled(Div)`
  grid-area: 3 / 3 / 4 / 4;
`

const Div12 = styled(Div)`
  grid-area: 3 / 4 / 4 / 5;
`

const Portfolio = () => {
  const images = [
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
    'https://images.pexels.com/photos/15286/pexels-photo.jpg',
    'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg',
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    'https://images.pexels.com/photos/213222/pexels-photo-213222.jpeg',
    'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg',
    'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    'https://images.pexels.com/photos/20787/pexels-photo.jpg',
  ]

  return (
    <Parent>
      <Div1 src='https://images.pexels.com/photos/12381329/pexels-photo-12381329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <Div2 src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' />
      <Div3 src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' />
      <Div4 src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg' />
      <Div5 src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg' />
      <Div6 src='https://images.pexels.com/photos/15286/pexels-photo.jpg' />
      <Div7 src='https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg' />
      <Div8 src='https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg' />
      <Div9 src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' />
      <Div10 src='https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png?auto=compress&cs=tinysrgb&w=1200' />
      <Div11 src='https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1200' />
      <Div12 src='https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg' />
    </Parent>
  )
}

export default Portfolio
