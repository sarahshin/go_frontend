import React from "react";
import Event from './Event'
import { Card, Header, Container, Button } from 'semantic-ui-react'


class Trip extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      events: [],
    })
  }

  componentDidMount(){
    console.log(this.props.match.params.id)
    this.fetchEvents()
  }

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

  renderEvents = () => {
    return this.state.events.map(event => {
      return <Event key={event.id} event={event} removeEvent={this.props.removeEvent}/>
    })
  }

  handleFinish = () => {
    this.props.renderNewTripForm()
    this.props.handleDoneBtnClick()
  }

  render() {
    return (
      <div className="">
        <Header as="h1">Your Selected Points of Interest</Header>
        <Container text style={{ marginTop: '5em' }}>
          <Card.Group>
            {this.renderEvents()}
          </Card.Group>
        </Container>
        <Button onClick={this.handleFinish}>Done</Button>
      </div>
    )
  }
}
export default Trip
