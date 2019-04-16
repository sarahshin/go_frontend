import React from "react"
import { NavLink } from "react-router-dom";
import { Card, Button } from "semantic-ui-react"
import moment from 'moment'

const HighLevelTrip = ({ trip, deleteThisTrip, today }) => {

  return (
  <div className="">
    <Card>
      <Card.Content>
        <Card.Header as="h1">{trip.location}</Card.Header>
        <Card.Meta>
          <span>{trip.startdate} - {trip.enddate}</span>
        </Card.Meta>
        <Card.Description>{moment(trip.startdate).diff(today, 'days') > 0 ? `${moment(trip.startdate).diff(today, 'days')} days away` : null }</Card.Description>
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
