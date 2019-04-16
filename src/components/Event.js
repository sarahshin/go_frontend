import React from "react"
import CalendarDateTime from "./CalendarDateTime"
import { Item, Button, Image } from 'semantic-ui-react'


const Event = ({ tripEvent, removeEvent, handleEventTime, handleEventDate, myTripStartDate, myTripEndDate }) => {

  // pass down function for updating event with time & date from App
  // pass down handleChange & onSubmit to CalendarDateTime

  return (
    <Item>
      <Image src={tripEvent.imgurl} size="small" floated="left" verticalAlign='middle' />
      <Item.Content floated="left"verticalAlign="middle" >
        <Item.Header as='a' to={tripEvent.url}>{tripEvent.name}</Item.Header>
        <Item.Meta>
          <span>{tripEvent.phone}</span>
        </Item.Meta>
        <Item.Description>{tripEvent.address}</Item.Description>
        <Item.Description>{tripEvent.address1}</Item.Description>
        <Item.Description>{tripEvent.address2}</Item.Description>
        <Item.Extra>
          <Button onClick={()=> removeEvent(tripEvent)}>Remove</Button>
        </Item.Extra>
      </Item.Content>
      <CalendarDateTime
        handleEventDate={handleEventDate}
        handleEventTime={handleEventTime}
        myTripStartDate={myTripStartDate}
        myTripEndDate={myTripEndDate}
      />
    </Item>

  )
}

export default Event
