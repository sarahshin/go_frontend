import React from "react";
import Event from './Event'
import SearchList from './SearchList'
import EventsMap from './EventsMap'
import { Link } from "react-router-dom";
import moment from 'moment'
import { Item, Header, Container, Button, Sidebar, Segment, Divider, Icon, Form, Dropdown, Grid } from 'semantic-ui-react'

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
      myTripStartDate: "",
      myTripEndDate: "",
      tripLocation: "",
      thisUserTrip: "",
      searchEvents: false,
      renderEditForm: false,
      visible: false,
      value: "",
      eventDate: "",
      eventTime: "",
    })
  }

  componentDidMount(){
    this.fetchEvents()
    this.fetchUserTrips()
  }
  //FETCH***********************************************************************
  fetchEvents = () => {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(events => {
      let myEvents = events.filter(event => event.user_trip.trip_id === parseInt(this.props.match.params.id))
      let myTrip = this.props.myTrips.filter(trip => trip.id === parseInt(this.props.match.params.id))
      let myTripLocation = myTrip[0].location
      let myTripStartDate = myTrip[0].startdate
      let myTripEndDate = myTrip[0].enddate
      this.setState({
        events: myEvents,
        tripLocation: myTripLocation,
        myTripStartDate: myTripStartDate,
        myTripEndDate: myTripEndDate,
      }, console.log(this.state.events))
    })
  }

  fetchUserTrips = () => {
    fetch("http://localhost:3000/api/v1/user_trips")
    .then(res => res.json())
    .then(user_trips => {
      let myUserTrip = user_trips.filter(user_trip => user_trip.trip_id === parseInt(this.props.match.params.id) && user_trip.user_id === parseInt(localStorage.id))
      this.setState({
        thisUserTrip: myUserTrip[0]
      }, ()=> this.props.setUserTrip(this.state.thisUserTrip))
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

  handleEventDate = (date) => {
    this.setState({ eventDate: date })
  }

  handleEventTime = (time) => {
    console.log(time)
  }

  //HELPER FUNCTIONS************************************************************
  renderEvents = () => {
    return this.state.events.map(event => {
      return <Event key={event.id} tripEvent={event} removeEvent={this.removeEvent} handleEventDate={this.handleEventDate} handleEventTime={this.handleEventTime} myTripStartDate={this.state.myTripStartDate} myTripEndDate={this.state.myTripEndDate} />
    })
  }

  handleDropDownChange = (e, { value }) => {
    this.setState({ value })
    this.props.setCategoryState(value)
  }

  searchForMoreEvents = (e) => {
    console.log(this.state.tripLocation)
    this.setState({
      searchEvents: true,
    })
    this.props.handleAdditionalSubmit(e)
  }

  addMoreEvents = () => {
    this.setState({
      visible: true,
      renderEditForm: true,
    })
    window.scrollTo(0,0)
  }

  doneAddingMoreEvents = () => {
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
      <div className="tripPage">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
           animation='overlay'
           icon='labeled'
           direction='right'
           vertical
           visible={this.state.visible}
           width='very wide'
         >
          <Container style={{ overflow: 'auto', maxHeight:'1000px' , maxWidth: '600px', marginTop: '7em'}}>
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
                events={this.state.events}
              />
              </React.Fragment>
            :
              null
            }
          </Container>
        </Sidebar>

          <Sidebar.Pusher dimmed={this.state.visible}>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column  style={{overflow: 'auto', maxHeight: '1000px'}} >
                  <Segment basic>
                    <Container textAlign='center' style={{ marginTop: '5em' }}>
                      <Header as="h1">{this.state.tripLocation}</Header>
                      <i>{moment(this.state.myTripStartDate).format("MM/DD/YYYY")} - {moment(this.state.myTripEndDate).format("MM/DD/YYYY")}</i>
                    </Container>
                    <Container style={{ marginTop: '3em' }}>
                      <Item.Group divided>
                        {this.renderEvents()}
                      </Item.Group>
                    </Container>
                    <Container text style={{ marginTop: '3em' }}>
                      <Button color='google plus' onClick={()=>this.props.clearLocation()}as={Link} to={"/dashboard"}>Done</Button>
                      <Button color='google plus' onClick={()=>this.addMoreEvents()}>Add more!</Button>
                    </Container>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Container text >
                    <EventsMap events={this.state.events}/>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
export default Trip
