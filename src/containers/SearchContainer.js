import React from "react";
import SearchList from '../components/SearchList'
import { Link } from "react-router-dom";
import { Form, Button, Header, Container, Dropdown } from 'semantic-ui-react'

const catOptions = [
  {
    key: 'Restaurants',
    text: 'Restaurants',
    value: 'Restaurants',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Arts',
    text: 'Arts',
    value: 'Arts',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Nightlife',
    text: 'Nightlife',
    value: 'Nightlife',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Souvenirs',
    text: 'Souvenirs',
    value: 'Souvenirs',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Tours',
    text: 'Tours',
    value: 'Tours',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Hotels',
    text: 'Hotels',
    value: 'Hotels',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  }
]

class SearchContainer extends React.Component {
  state = {}

  handleDropDownChange = (e, { value }) => {
    this.setState({ value })
    this.props.setCategoryState(value)
  }

  render() {
    const { value } = this.state

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
              <label>Search Category</label>
              <Dropdown
                onChange={this.handleDropDownChange}
                name="searchCategory"
                value={value}
                placeholder='category'
                fluid
                selection
                options={catOptions}
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
            returnedBusinesses={this.props.returnedBusinesses}
            addEventToTrip={this.props.addEventToTrip}
            usertrip={this.props.usertrip}
          />

      </div>
    )
  }
}
export default SearchContainer
