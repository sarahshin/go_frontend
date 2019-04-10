import React from "react"
import TripList from "../components/TripList"
import { Container, Header } from "semantic-ui-react"


const Dashboard = ({ myTrips }) => {


  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Your Trips</Header>
      <TripList myTrips={myTrips}/>
    </Container>
  )
}

export default Dashboard
