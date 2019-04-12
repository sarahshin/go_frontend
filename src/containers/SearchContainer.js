import React from "react";
import SearchForm from '../components/SearchForm'
import SearchList from '../components/SearchList'

class SearchContainer extends React.Component {
  // state = {}
  //
  // handleDropDownChange = (e, { value }) => {
  //   this.setState({ value })
  //   this.props.setCategoryState(value)
  // }

  render() {
    // const { value } = this.state

    return (
      <div>
          <SearchForm
            searchTerm={this.props.searchTerm}
            handleChange={this.props.handleChange}
            location={this.props.location}
            handleSubmit={this.props.handleSubmit}
            usertrip={this.props.usertrip}
            setCategoryState={this.props.setCategoryState}
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
