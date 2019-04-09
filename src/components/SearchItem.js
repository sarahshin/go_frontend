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
  <Card>
    <Card.Content>
      <Image src={restaurant.image_url} alt="image" style={{width:'300px'}}/>
      <h4>{restaurant.name}</h4>
      <h5>{restaurant.price}</h5>
      <h5>{restaurant.rating}</h5>
      {displayAddress()}
      <a href={restaurant.url}>view on yelp</a>
    </Card.Content>
    <Button onClick={()=> addEventToTrip(restaurant)}>Add to Trip</Button>
  </Card>
  )
}

export default SearchItem
