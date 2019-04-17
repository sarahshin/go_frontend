import React from "react"
import HighLevelTrip from "./HighLevelTrip"
import { Card, Container } from "semantic-ui-react"
import uuid from 'uuid'

const TripList = ({ myTrips, deleteThisTrip, today, setTripLocation, history }) => {

  const renderTrips = () => {
    return myTrips.map(trip => {
      return <HighLevelTrip key={uuid()} trip={trip} deleteThisTrip={deleteThisTrip} today={today} setTripLocation={setTripLocation} history={history} />
    })
  }

  return (
  <div className="">
    <Container style={{ marginTop: '7em' }}>
      <Card.Group centered cards={myTrips}>
        {renderTrips()}
      </Card.Group>
    </Container>
  </div>
  )
}

export default TripList
