import React from "react"
import SearchList from '../components/SearchList'
import { Form, Button, Header,Container } from 'semantic-ui-react'

//CHANGE THIS TO A GENERIC SEARCH FOR ALL CATEGORIES?

const SearchContainer = (props) => {
  return (
  <div className="">
    <Container text style={{ marginTop: '7em' }}>
      <Form>
        <Header as="h3">Search Restaurants</Header>
        <Form.Field>
          <label>Search Term:</label>
          <input
            onChange={(e) => props.handleChange(e)}
            name="searchTerm"
            value={props.searchTerm}
            placeholder='burgers'
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input
            // onChange={(e) => props.handleChange(e)}
            name="location"
            value={props.location}
            placeholder={props.location}
          />
        </Form.Field>
        <Button type='submit' onClick={props.handleSubmit}>Search</Button>
        <Button>Done with Selections</Button>
      </Form>
      <SearchList returnedRestaurants={props.returnedRestaurants} addEventToTrip={props.addEventToTrip} usertrip={props.usertrip}/>
    </Container>
  </div>
  )
}

export default SearchContainer
