import React from "react";
import { Link } from "react-router-dom";

import { Form, Button, Header, Grid, Dropdown } from 'semantic-ui-react'

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

  handleDoneBtnClick = (e) => {

  }

  render() {
    const { value } = this.state

    return (
      <div>
        <Grid textAlign='center' style={{ height: '100%', marginTop: "7em" }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" style={{marginTop: "7em"}}>
          <Header as="h2" color="yellow">Search</Header>
          <Form.Field>
            <Form.Input
              fluid icon='search'
              iconPosition='left'
              placeholder='things to eat, places to go, things to see'
              onChange={(e) => this.props.handleChange(e)}
              name="searchTerm"
              value={this.props.searchTerm}
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
            <Form.Input
              fluid icon="world"
              iconPosition="left"
              name="location"
              readOnly
              value={this.props.location}
              placeholder={this.props.location}
            />
          </Form.Field>
          <Button color="yellow" fluid size = 'large' type='submit' onClick={this.props.handleSubmit}>Search</Button>
        </Form>
        <Button basic color="yellow" fluid size = 'large' style={{ marginTop: '1em' }} onClick={this.props.clearReturn} as={Link} to={"/trips/"+this.props.usertrip.trip_id}>Done with Selections</Button>
        </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default SearchForm
