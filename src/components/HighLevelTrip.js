import React from "react"
import { NavLink } from "react-router-dom";
import { Card, Button } from "semantic-ui-react"

const HighLevelTrip = ({ trip, deleteThisTrip }) => {

  return (
  <div className="">
    <Card>
      <Card.Content>
        <Card.Header>{trip.location}</Card.Header>
        <Card.Meta>
          <span>{trip.startdate} - {trip.enddate}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button as={NavLink} to={"/trips/" + trip.id}>View Details</Button>
        <Button onClick={()=> deleteThisTrip(trip)}>Delete</Button>
      </Card.Content>
    </Card>
  </div>
  )
}

export default HighLevelTrip
