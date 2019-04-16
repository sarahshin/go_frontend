import React from "react"
import CalendarRange from "./CalendarRange"

import { Form, Button, Header, Container } from 'semantic-ui-react'

const NewTripForm = (props) => {

  return (
  <div className="newtrip">
    <Container text style={{ marginTop: '7em' }}>
      <Form>
        <Header as="h2">Start Planning A New Trip</Header>
        <Form.Field>
          <label>Location</label>
          <input onChange={(e) => props.handleChange(e)} name="location" value={props.location} placeholder='City' />
        </Form.Field>
        <Form.Field>
          <label>Select Date Range</label>
          <CalendarRange handleStartDate={props.handleStartDate} handleEndDate={props.handleEndDate} startdate={props.startdate} enddate={props.enddate}/>
        </Form.Field>
        <Button type='submit' onClick={props.createTrip}>Next</Button>
      </Form>
    </Container>
  </div>
  )
}

export default NewTripForm
