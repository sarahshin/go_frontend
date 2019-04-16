import React from "react"
import SearchItem from './SearchItem'
import { Card, Container } from 'semantic-ui-react'
import uuid from 'uuid'

const SearchList = (props) => {

  const renderSearchReturn = () => {
    return props.returnedBusinesses.map(business => {
      return <SearchItem key={uuid()} business={business} addEventToTrip={props.addEventToTrip} usertrip={props.usertrip}/>
    })
  }
  return (
  <div className="">
    <Container style={{ marginTop: '7em' }}>
      <Card.Group>
        {renderSearchReturn()}
      </Card.Group>
    </Container>
  </div>
  )
}

export default SearchList
