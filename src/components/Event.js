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
        <Item.Header><a href={tripEvent.url}>{tripEvent.name}</a></Item.Header>
        <Item.Meta>{tripEvent.date} | {tripEvent.time}</Item.Meta>
        <Item.Meta>
          <span>{tripEvent.phone}</span>
        </Item.Meta>
        <Item.Description>{tripEvent.address}</Item.Description>
        <Item.Description>{tripEvent.address1}</Item.Description>
        <Item.Description>{tripEvent.address2}</Item.Description>
        <Item.Extra>
          <Button basic color='red' onClick={()=> removeEvent(tripEvent)}>Remove</Button>
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
