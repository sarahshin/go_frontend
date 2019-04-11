import React from "react";
import Event from './Event'
import { Link } from "react-router-dom";
import { Item, Header, Container, Button } from 'semantic-ui-react'


class Trip extends React.Component {

  //STATE & LIFECYCLE***********************************************************
  constructor(props){
    super(props)
    this.state = ({
      events: [],
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
        events: myEvents
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

  //RENDER**********************************************************************
  render() {
    return (
      <div className="">
        <Container textAlign='center' style={{ marginTop: '5em' }}>
          <Header as="h1">Points of Interest</Header>
        </Container>
        <Container style={{ marginTop: '3em' }}>
          <Item.Group divided>
            {this.renderEvents()}
          </Item.Group>
        </Container>
        <Container text style={{ marginTop: '3em' }}>
          <Button as={Link} to={"/dashboard"}>Back</Button>
        </Container>
      </div>
    )
  }
}
export default Trip
