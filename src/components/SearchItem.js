import React from "react"
import { Card, Image, Button } from "semantic-ui-react"

const SearchItem = ({ business, addEventToTrip, usertrip }) => {

  const displayAddress = () => {
    return business.location.display_address.map(line => {
      return <p>{line}</p>
    })
  }

  // const handleAdd = (restaurant) => {
  //   addEventToTrip(restaurant)
  // }

  return (
    <Card style={{ width: 250 }}>
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
      <Button onClick={()=> addEventToTrip(business)}>Add to Trip</Button>
    </Card>
  )
}

export default SearchItem
