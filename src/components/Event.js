import React from "react"
// import CalendarDateTime from "./CalendarDateTime"
import { Item, Button, Image, Icon } from 'semantic-ui-react'


const Event = ({ tripEvent, removeEvent, handleEventTime, handleEventDate, myTripStartDate, myTripEndDate }) => {

  // pass down function for updating event with time & date from App
  // pass down handleChange & onSubmit to CalendarDateTime

  const renderIcon = () => {
    switch (tripEvent.cat){
      case "Restaurants":
        return <Icon floated="right" name="food" size="large" verticalAlign='middle'/>
        break;
      case "Arts":
        return <Icon floated="right" name="paint brush" size="large"verticalAlign='middle' />
        break;
      case "Tours":
        return <Icon floated="right" name="binoculars" size="large" verticalAlign='middle' />

        break;
      case "Hotels":
        return <Icon floated="right" name="hotel" size="large" verticalAlign='middle' />

        break;
      case "Nightlife":
        return <Icon floated="right" name="bar" size="large" verticalAlign='middle' />

        break;
      case "Souvenirs":
        return <Icon floated="right" name="cart" size="large" verticalAlign='middle' />
        break;
      default:
        console.log("how")
        break;
    }

  }

  return (
    <Item>
      <Image src={tripEvent.imgurl} size="small" floated="left" verticalAlign='middle' />
      <Item.Content verticalAlign="middle" >
        <Item.Header><a href={tripEvent.url}>{tripEvent.name}</a></Item.Header>
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
      {renderIcon()}
    </Item>

  )
}
// <CalendarDateTime
// handleEventDate={handleEventDate}
// handleEventTime={handleEventTime}
// myTripStartDate={myTripStartDate}
// myTripEndDate={myTripEndDate}
// />

export default Event
