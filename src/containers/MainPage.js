import React from "react"
import { Container, Image } from "semantic-ui-react"
import logo from './gogologo.png'

const MainPage = () => {
  return (
  <div className="">
    <Container text style={{ marginTop: '7em' }}>
      <Image src={logo} centered />
      <i>A travel planning app</i>
    </Container>
  </div>
  )
}


export default MainPage
