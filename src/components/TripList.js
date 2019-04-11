import React from "react"
import HighLevelTrip from "./HighLevelTrip"
import { Card, Container } from "semantic-ui-react"

const TripList = ({ myTrips, deleteThisTrip }) => {

  const renderTrips = () => {
    return myTrips.map(trip => {
      return <HighLevelTrip key={trip.id} trip={trip} deleteThisTrip={deleteThisTrip} />
    })
  }

  return (
  <div className="">
    <Container text style={{ marginTop: '7em' }}>
      <Card.Group itemsPerRow={5} >
        {renderTrips()}
      </Card.Group>
    </Container>
  </div>
  )
}

export default TripList
