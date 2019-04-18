import React from "react"
import { Grid, Image, Segment } from "semantic-ui-react"
import {Animated} from "react-animated-css";
import logo from './gogologo.png'

const MainPage = () => {
  return (
  <div className="">
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
          <Animated animationIn="tada" isVisible={true}>
            <Image src={logo} centered style={{ height: "600px", width: "600px"}}/>
          </Animated>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
  )
}


export default MainPage
