import React from "react"
import { Item, Button, Image } from 'semantic-ui-react'


const Event = ({ tripEvent, removeEvent }) => {

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
          <Button onClick={()=>console.log("edit me- aka give me a time/date")}>Edit</Button>
          <Button onClick={()=> removeEvent(tripEvent)}>Remove</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

  )
}

export default Event
