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
        usertrip={props.usertrip}
      />
      :
      <SearchContainer
        returnedBusinesses={props.returnedBusinesses}
        searchTerm={props.searchTerm}
        searchCategory={props.searchCategory}
        location={props.location}
        setCategoryState={props.setCategoryState}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        addEventToTrip={props.addEventToTrip}
        usertrip={props.usertrip}
        removeEvent={props.removeEvent}
        renderNewTripForm={props.renderNewTripForm}
      />
    }

  </div>
  )
}

export default TripContainer
