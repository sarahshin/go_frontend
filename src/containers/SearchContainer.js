import React from "react";
import SearchList from '../components/SearchList'
import { Link } from "react-router-dom";
import { Form, Button, Header, Container } from 'semantic-ui-react'

class SearchContainer extends React.Component {

  render() {
    return (
      <div>
        <Container text style={{ marginTop: '7em' }}>
          <Form>
            <Header as="h3">Search Restaurants</Header>
            <Form.Field>
              <label>Search Term:</label>
              <input
                onChange={(e) => this.props.handleChange(e)}
                name="searchTerm"
                value={this.props.searchTerm}
                placeholder='things to eat, places to go, things to see'
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input
                name="location"
                value={this.props.location}
                placeholder={this.props.location}
              />
            </Form.Field>
            <Button type='submit' onClick={this.props.handleSubmit}>Search</Button>
          </Form>
          <Button onClick={this.handleDoneBtnClick} as={Link} to={"/trips/"+this.props.usertrip.trip_id}>Done with Selections</Button>
        </Container>
          <SearchList
            returnedRestaurants={this.props.returnedRestaurants}
            addEventToTrip={this.props.addEventToTrip}
            usertrip={this.props.usertrip}
          />

      </div>
    )
  }
}
export default SearchContainer
