import React from "react";
import SearchForm from '../components/SearchForm'
import SearchList from '../components/SearchList'

class SearchContainer extends React.Component {

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.props.searchTerm}
          handleChange={this.props.handleChange}
          location={this.props.location}
          handleSubmit={this.props.handleSubmit}
          usertrip={this.props.usertrip}
          setCategoryState={this.props.setCategoryState}
          clearReturn={this.props.clearReturn}
        />
        <SearchList
          returnedBusinesses={this.props.returnedBusinesses}
          addEventToTrip={this.props.addEventToTrip}
          usertrip={this.props.usertrip}
        />
      </div>
    )
  }
}
export default SearchContainer
