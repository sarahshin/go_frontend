import React from "react"
import { Card, Image, Button } from "semantic-ui-react"

const SearchItem = ({ restaurant, addEventToTrip, usertrip }) => {

  const displayAddress = () => {
    return restaurant.location.display_address.map(line => {
      return <p>{line}</p>
    })
  }

  // const handleAdd = (restaurant) => {
  //   addEventToTrip(restaurant)
  // }

  return (
    <Card style={{ marginLeft: '2em'}}>
      <Card.Content>
        <Image src={restaurant.image_url} alt="image" style={{width:'300px'}}/>
        <Card.Header>{restaurant.name}</Card.Header>
        <Card.Meta>
          <span>{restaurant.price}</span>
          <span>{restaurant.rating}</span>
        </Card.Meta>
        <Card.Description>{displayAddress()}</Card.Description>
        <Card.Description><a href={restaurant.url}>view on yelp</a></Card.Description>
      </Card.Content>
      <Button onClick={()=> addEventToTrip(restaurant)}>Add to Trip</Button>
    </Card>
  )
}

export default SearchItem
