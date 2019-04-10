import React from "react";
import SearchList from '../components/SearchList'
import Trip from '../components/Trip'
import { Form, Button, Header, Container } from 'semantic-ui-react'

class SearchContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      doneBtnClicked: false,
    }
  }

  handleDoneBtnClick = () => {
    console.log(this.props.usertrip)
    this.setState({
      doneBtnClicked: !this.state.doneBtnClicked
    })
  }


  render() {
    return (
      <div>
        <React.Fragment>
        {!this.state.doneBtnClicked ?
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
            <Button onClick={this.handleDoneBtnClick}>Done with Selections</Button>
            <SearchList
              returnedRestaurants={this.props.returnedRestaurants}
              addEventToTrip={this.props.addEventToTrip}
              usertrip={this.props.usertrip}
            />
          </Container>
          :
          <Container text style={{ marginTop: '7em' }}>
            <Trip
              usertrip={this.props.usertrip}
              removeEvent={this.props.removeEvent}
              handleDoneBtnClick={this.handleDoneBtnClick}
              renderNewTripForm={this.props.renderNewTripForm}
            />
          </Container>
        }
        </React.Fragment>
      </div>
    )
  }
}
export default SearchContainer
