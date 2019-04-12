import React, {createRef} from "react";
import Event from './Event'
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
      searchEvents: false,
      renderEditForm: false,
      visible: false,
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
      }, ()=> console.log(this.state.events))
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

  searchForMoreEvents = () => {
    console.log("gimme gimme more gimme more gimme gimme more")
    this.setState({
      searchEvents: true,
    })
  }

  addMoreEvents = () => {
    console.log("ADD MORE STUFFS")
    this.setState({
      visible: true,
      renderEditForm: true,
    })
  }



  //RENDER**********************************************************************

  render() {
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
              <input/>
            </Form.Field>
            <Form.Field>
              <label>Search Category</label>
              <Dropdown
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
              <Button type='submit' onClick={()=> this.searchForMoreEvents()}>Search</Button>
            </Form>
            { this.state.searchEvents ?
              <Divider horizontal>
                <Header as="h4">
                Results
                </Header>
              </Divider>
            :
              null
            }
          </Container>
        </Sidebar>

          <Sidebar.Pusher>
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
