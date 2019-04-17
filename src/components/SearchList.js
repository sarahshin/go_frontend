import React from "react"
import SearchItem from './SearchItem'
import { Card, Container } from 'semantic-ui-react'
import uuid from 'uuid'

class SearchList extends React.PureComponent {

  constructor(props){
    super(props)
    this.state = {
      biz: [],
    }
  }


  componentDidUpdate(prevProps, prevState){
    if(prevProps.returnedBusinesses !== this.props.returnedBusinesses){
      this.setState({
        biz: this.props.returnedBusinesses,
      })
    }
  }

  renderSearchReturn = () => {
    console.log(this.state.biz)
    return this.state.biz.map(business => {
      return <SearchItem key={uuid()} business={business} addEventToTrip={this.props.addEventToTrip} usertrip={this.props.usertrip}/>
    })
  }

  render() {
    return (
      <div className="">
        <Container style={{ marginTop: '7em' }}>
          <Card.Group centered cards={this.state.biz} >
            {this.renderSearchReturn()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}
export default SearchList
