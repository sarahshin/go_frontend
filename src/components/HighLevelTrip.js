import React from "react"
import { Card, Button } from "semantic-ui-react"

const HighLevelTrip = ({ trip }) => {
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
        <Button onClick={()=> console.log("clicked me")}>View Details</Button>
      </Card.Content>
    </Card>
  </div>
  )
}

export default HighLevelTrip
