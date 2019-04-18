import React from "react"
import { Card, Image, Button } from "semantic-ui-react"
import ReactStars from 'react-stars'
import uuid from 'uuid'

const SearchItem = ({ business, addEventToTrip, usertrip }) => {

  const displayAddress = () => {
    return business.location.display_address.map(line => {
      return <p key={uuid()}>{line}</p>
    })
  }

  return (
      <Card color="yellow">
        <Card.Content>
        <Card.Header>{business.name}</Card.Header>
          <Image src={business.image_url} alt="image"/>
          <Card.Meta>
            <div className="price">
              {business.price}
            </div>
            <div className="stars">
            <ReactStars
              count={5}
              value={business.rating}
              half
              size={16}
              color2={'#FEBB1B'}
            />
            </div>
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
