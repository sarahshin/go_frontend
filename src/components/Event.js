import React from "react"
import { Card, Button } from 'semantic-ui-react'


const Event = ({ event, removeEvent }) => {
  return (
  <div className="">
    <Card>
      <Card.Content>
        <Card.Header>{event.name}</Card.Header>
        <Card.Meta>
          <span>{event.phone}</span>
        </Card.Meta>
        <Card.Description>{event.address}</Card.Description>
        <Card.Description>{event.address1}</Card.Description>
        <Card.Description>{event.address2}</Card.Description>
        <a href={event.url}>view on yelp</a>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={removeEvent}>Remove</Button>
        <Button onClick={()=>console.log("edit me- aka give me a time/date")}>Edit</Button>
      </Card.Content>
    </Card>
  </div>
  )
}

export default Event
