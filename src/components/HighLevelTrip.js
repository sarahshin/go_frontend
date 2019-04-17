import React from "react"
import { Card, Button } from "semantic-ui-react"
import moment from 'moment'

const HighLevelTrip = ({ trip, deleteThisTrip, today, setTripLocation, history }) => {

  const handleTripClick = () => {
    setTripLocation(trip.location)
    return history.push(`/trips/${trip.id}`)
  }

  return (
    <Card color='yellow'>
      <Card.Content>
        <Card.Header as="h1">{trip.location}</Card.Header>
        <Card.Meta>
          <span>{moment(trip.startdate).format("MM/DD/YYYY")} - {moment(trip.enddate).format("MM/DD/YYYY")}</span>
        </Card.Meta>
        <Card.Description>{moment(trip.startdate).diff(today, 'days') > 0 ? `${moment(trip.startdate).diff(today, 'days')} days away` : null }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='blue' onClick={handleTripClick}>View Details</Button>
        <Button basic color='red' onClick={()=> deleteThisTrip(trip)}>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default HighLevelTrip
