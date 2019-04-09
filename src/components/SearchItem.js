import React from "react"
import { Card, Image, Button } from "semantic-ui-react"

const SearchItem = (props) => {

  const displayAddress = () => {
    return props.restaurant.location.display_address.map(line => {
      return <p>{line}</p>
    })
  }
  return (
  <Card>
    <Card.Content>
      <Image src={props.restaurant.image_url} alt="image" style={{width:'300px'}}/>
      <h4>{props.restaurant.name}</h4>
      <h5>{props.restaurant.price}</h5>
      <h5>{props.restaurant.rating}</h5>
      {displayAddress()}
      <a href={props.restaurant.url}>view on yelp</a>
    </Card.Content>
    <Button onClick={null}>Add to Trip</Button>
  </Card>
  )
}

export default SearchItem
