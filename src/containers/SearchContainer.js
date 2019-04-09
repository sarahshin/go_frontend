import React from "react"
import SearchList from '../components/SearchList'
import { Form, Button, Header } from 'semantic-ui-react'


const SearchContainer = (props) => {
  return (
  <div className="">
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
          onChange={(e) => props.handleChange(e)}
          name="location"
          value={props.location}
          placeholder='new york city'
        />
      </Form.Field>
      <Button type='submit' onClick={props.handleSubmit}>Search</Button>
    </Form>
    <SearchList returnedRestaurants={props.returnedRestaurants}/>
  </div>
  )
}

export default SearchContainer
