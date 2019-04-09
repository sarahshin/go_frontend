import React from "react"
import SearchItem from './SearchItem'
import { Card } from 'semantic-ui-react'

const SearchList = (props) => {

  const renderRestaurantSearchReturn = () => {
    return props.returnedRestaurants.map(restaurant => {
      return <SearchItem key={restaurant.id} restaurant={restaurant}/>
    })
  }
  return (
  <div className="">
    <Card.Group>
      {renderRestaurantSearchReturn()}
    </Card.Group>
  </div>
  )
}

export default SearchList
