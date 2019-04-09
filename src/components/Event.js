import React from "react"
import { Card } from 'semantic-ui-react'


const Event = ({ event }) => {
  return (
  <div className="">
    <Card>
      <Card.Content>
        <h4>{event.name}</h4>
        <h5>date: {event.date}</h5>
        <h5>time: {event.time}</h5>
      </Card.Content>
    </Card>
  </div>
  )
}

export default Event
