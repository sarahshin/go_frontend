import React from "react";
import { Link } from "react-router-dom";

import { Form, Button, Header, Container, Dropdown } from 'semantic-ui-react'

const catOptions = [
  {
    key: 'Restaurants',
    text: 'Restaurants',
    value: 'Restaurants',
  },
  {
    key: 'Arts',
    text: 'Arts',
    value: 'Arts',
  },
  {
    key: 'Nightlife',
    text: 'Nightlife',
    value: 'Nightlife',
  },
  {
    key: 'Souvenirs',
    text: 'Souvenirs',
    value: 'Souvenirs',
  },
  {
    key: 'Tours',
    text: 'Tours',
    value: 'Tours',
  },
  {
    key: 'Hotels',
    text: 'Hotels',
    value: 'Hotels',
  }
]

class SearchForm extends React.Component {
  state = {}

  handleDropDownChange = (e, { value }) => {
    this.setState({ value })
    this.props.setCategoryState(value)
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <Container style={{ marginTop: '7em' }}>
        <Form>
          <Header as="h3">Search</Header>
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
              readOnly
              value={this.props.location}
              placeholder={this.props.location}
            />
          </Form.Field>
          <Button type='submit' onClick={this.props.handleSubmit}>Search</Button>
        </Form>
        <Button style={{ marginTop: '1em' }} onClick={this.handleDoneBtnClick} as={Link} to={"/trips/"+this.props.usertrip.trip_id}>Done with Selections</Button>
        </Container>
      </div>
    )
  }
}
export default SearchForm
