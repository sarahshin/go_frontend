import React from "react";
import Event from './Event'
import { Card } from 'semantic-ui-react'


class Trip extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      events: [],
    })
  }

  componentDidMount(){
    this.fetchEvents()
  }

  fetchEvents = () => {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(events => {
      let myEvents = events.filter(event => event.user_trip_id === this.props.usertrip.id)
      this.setState({
        events: myEvents
      }, ()=> console.log(this.state.events))
    })
  }

  renderEvents = () => {
    return this.state.events.map(event => {
      return <Event key={event.id} event={event}/>
    })
  }

  render() {
    return (
      <div className="">
        <Card.Group>
          {this.renderEvents()}
        </Card.Group>
      </div>
    )
  }
}
export default Trip
