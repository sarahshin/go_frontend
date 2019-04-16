import React from "react"
import TripList from "../components/TripList"
import { Container, Header } from "semantic-ui-react"

const Dashboard = ({ myTrips, upcomingTrips, pastTrips, deleteThisTrip, today}) => {
  return (
  <div className="">
    <Container style={{ marginTop: '7em' }}>
        <Header as='h1'>Upcoming Trips</Header>
        <Container>
          <TripList myTrips={upcomingTrips} deleteThisTrip={deleteThisTrip} today={today}/>
        </Container>
        <Header style={{ marginTop: '2em'}}as='h1'>Past Trips</Header>
        <Container>
          <TripList myTrips={pastTrips} deleteThisTrip={deleteThisTrip} today={today}/>
        </Container>
    </Container>
  </div>
  )
}

export default Dashboard
