import React, {createRef} from "react";
import Event from './Event'
import SearchList from './SearchList'
import { Link } from "react-router-dom";
import { Item, Header, Container, Button, Sidebar, Segment, Divider, Icon, Form, Dropdown, Image } from 'semantic-ui-react'

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

class Trip extends React.Component {

  //STATE & LIFECYCLE***********************************************************
  constructor(props){
    super(props)
    this.state = ({
      events: [],
      tripLocation: "",
      thisUserTrip: "",
      searchEvents: false,
      renderEditForm: false,
      visible: false,
      value: "",
    })
  }


  componentDidMount(){
    console.log(this.props.match)
    this.fetchEvents()
  }
  //FETCH***********************************************************************
  fetchEvents = () => {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(events => {
      let myEvents = events.filter(event => event.user_trip.trip_id === parseInt(this.props.match.params.id))
      this.setState({
        events: myEvents,
        tripLocation: myEvents[0].user_trip.trip.location,
        thisUserTrip: myEvents[0].user_trip
      }, ()=> this.props.setTripLocation(this.state.tripLocation, this.state.thisUserTrip))
    })
  }

  removeEvent = (tripEvent) => {
    console.log("remove me", tripEvent)
    let updatedEvents = this.state.events.filter(event => event !== tripEvent)
    this.setState({
      events: updatedEvents
    })
    fetch(`http://localhost:3000/api/v1/events/${tripEvent.id}`, {
      method: "DELETE"
    })
  }

  //HELPER FUNCTIONS************************************************************
  renderEvents = () => {
    return this.state.events.map(event => {
      return <Event key={event.id} tripEvent={event} removeEvent={this.removeEvent}/>
    })
  }

  handleDropDownChange = (e, { value }) => {
    this.setState({ value })
    this.props.setCategoryState(value)
  }

  searchForMoreEvents = (e) => {
    console.log("gimme gimme more gimme more gimme gimme more")
    this.setState({
      searchEvents: true,
    })
    this.props.handleAdditionalSubmit(e)
  }

  addMoreEvents = () => {
    console.log("ADD MORE STUFFS")
    this.setState({
      visible: true,
      renderEditForm: true,
    })
  }

  doneAddingMoreEvents = () => {
    console.log("All done here- moving along")
    this.setState({
      visible: false,
      renderEditForm: false,
      searchEvents: false,
    })
    this.fetchEvents()
  }

  //RENDER**********************************************************************

  render() {
    const { value } = this.state.value
    return (
      <div className="">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
           animation='overlay'
           icon='labeled'
           direction='right'
           vertical
           visible={this.state.visible}
           width='very wide'
         >
          <Container style={{marginTop: '7em'}}>
            <Divider horizontal>
              <Header as="h4">
              <Icon name="add" />
              Search
              </Header>
            </Divider>
            <Form>
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
                value={this.state.tripLocation}
                placeholder={this.state.tripLocation}
              />
            </Form.Field>
              <Button type='submit' onClick={(e)=> this.searchForMoreEvents(e)}>Search</Button>
              <Button onClick={()=> this.doneAddingMoreEvents()}>Done</Button>
            </Form>
            { this.state.searchEvents ?
              <React.Fragment>
              <Divider horizontal>
                <Header as="h4">
                Results
                </Header>
              </Divider>
              <SearchList
                returnedBusinesses={this.props.returnedBusinesses}
                addEventToTrip={this.props.addEventToTrip}
              />
              </React.Fragment>
            :
              null
            }
          </Container>
        </Sidebar>

          <Sidebar.Pusher dimmed={this.state.visible}>
            <Segment basic>
              <Container textAlign='center' style={{ marginTop: '5em' }}>
                <Header as="h1">Points of Interest</Header>
              </Container>
              <Container style={{ marginTop: '3em' }}>
                <Item.Group divided>
                  {this.renderEvents()}
                </Item.Group>
              </Container>
              <Container text style={{ marginTop: '3em' }}>
                <Button as={Link} to={"/dashboard"}>Done</Button>
                <Button onClick={()=>this.addMoreEvents()}>Edit this Trip!</Button>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
export default Trip
