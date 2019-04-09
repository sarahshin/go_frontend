import React from "react"
import Trip from "./Trip"
import { Card } from "semantic-ui-react"

const TripList = (props) => {

  const renderUpcomingTrips = () => {
    return props.upcomingTrips.map(trip => <Trip key={trip.id} trip={trip}/>)
  }

  return (
  <div className="">
    <Card.Group>
      {renderUpcomingTrips()}

    </Card.Group>
  </div>
  )
}

export default TripList
