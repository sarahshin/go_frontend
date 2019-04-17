import React from 'react';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { GOOG_KEY } from '../keys'

const mapStyles = {
  width: "85%",
  height: "85%",
  marginTop: '5em',
  horizontalAlign: 'centered'
}

class EventsMap extends React.PureComponent {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      latitude: 0,
      longitude: 0
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.latitude !== this.state.latitude) {
      this.setState({
        latitude: this.props.events[0].latitude,
        longitude: this.props.events[0].longitude
      })
    }
  }

  renderMarkers = () => {
    return this.props.events.map(event => {
      return <Marker key={event.id} title={event.name} name={event.name} position={{lat: event.latitude, lng: event.longitude}}/>
    })
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
