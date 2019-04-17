import React from "react"
import { Card, Image, Button } from "semantic-ui-react"
import uuid from 'uuid'

const SearchItem = ({ business, addEventToTrip, usertrip }) => {

  const displayAddress = () => {
    return business.location.display_address.map(line => {
      return <p key={uuid()}>{line}</p>
    })
  }

  // const handleAdd = (restaurant) => {
  //   addEventToTrip(restaurant)
  // }

  return (
      <Card color="yellow">
        <Card.Content>
        <Card.Header>{business.name}</Card.Header>
          <Image src={business.image_url} alt="image"/>
          <Card.Meta>
            <span>{business.price}</span>
            <span>{business.rating}</span>
          </Card.Meta>
          <Card.Description>{displayAddress()}</Card.Description>
          <Card.Description><a href={business.url}>view on yelp</a></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="yellow" onClick={()=> addEventToTrip(business)}>Add to Trip</Button>
        </Card.Content>
      </Card>
  )
}

export default SearchItem
