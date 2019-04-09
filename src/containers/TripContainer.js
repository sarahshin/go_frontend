import React from "react";
import NewTripForm from "../components/NewTripForm"
import SearchContainer from "./SearchContainer"
// import TripList from "../components/TripList";

const TripContainer = (props) => {

  return (
  <div className="">
    { !props.formSubmitted ?
      <NewTripForm
        handleChange={props.handleChange}
        location={props.location}
        startdate={props.startdate}
        enddate={props.enddate}
        createTrip={props.createTrip}
      />
      :
      <SearchContainer
        returnedRestaurants={props.returnedRestaurants}
        searchTerm={props.searchTerm}
        location={props.location}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        addEventToTrip={props.addEventToTrip}
        usertrip={props.usertrip}
      />
    }

  </div>
  )
}

export default TripContainer
