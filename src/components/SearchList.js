import React from "react"
import SearchItem from './SearchItem'
import { Card, Container } from 'semantic-ui-react'

const SearchList = (props) => {

  const renderRestaurantSearchReturn = () => {
    return props.returnedRestaurants.map(restaurant => {
      return <SearchItem key={restaurant.id} restaurant={restaurant} addEventToTrip={props.addEventToTrip} usertrip={props.usertrip}/>
    })
  }
  return (
  <div className="">
    <Container text style={{ marginTop: '5em' }}>
      <Card.Group>
        {renderRestaurantSearchReturn()}
      </Card.Group>
    </Container>
  </div>
  )
}

export default SearchList
