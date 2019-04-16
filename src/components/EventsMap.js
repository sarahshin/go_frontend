import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { GOOG_KEY } from '../keys'

const mapStyles = {
  width: "700px",
  height: "900px",
  marginTop: '5em'
}

class EventsMap extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      latitude: 40.7128,
      longitude: -74.0060
    }
  }

  componentDidMount = () => {
    console.log(this.props.events[0])
    if (this.props.events.length > 0) {
      console.log('fired');
      this.setState({
        latitude: this.props.events[0].latitude,
        longitude: this.props.events[0].longitude
      },()=> console.log(this.state.latitude, this.state.longitude))
    }
  }

  renderMarkers = () => {
    // console.log(this.props.events)
    // console.log(this.props.events[0])
    return this.props.events.map(event => {
      return <Marker key={event.id} title={event.name} name={event.name} position={{lat: event.latitude, lng: event.longitude}}/>
    })
  }

  renderInitialCenter = () => {
    // console.log(this.props.events)
    // return {lat:parseInt(this.props.events[0].latitude), lng: parseInt(this.props.events[0].longitude)}
  }

  render(){
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        center={{
          lat: this.state.latitude,
          lng: this.state.longitude
        }}
        options={{ fullscreenControl: true }}
      >
      {this.renderMarkers()}
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: GOOG_KEY
})(EventsMap);
