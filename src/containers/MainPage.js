import React from "react"
import { Container, Image } from "semantic-ui-react"
import {Animated} from "react-animated-css";
import logo from './gogologo.png'

const MainPage = () => {
  return (
  <div className="">
    <Container text style={{ marginTop: '7em' }}>
    <Animated animationIn="tada" isVisible={true}>
      <Image src={logo} centered style={{ height: "600px", width: "600px"}}/>
      <i>A travel planning app</i>
    </Animated>
    </Container>
  </div>
  )
}


export default MainPage
