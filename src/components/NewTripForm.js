import React from "react"
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
          <label>Start Date</label>
          <input onChange={(e)=>props.handleChange(e)} name="startdate" value={props.startdate} placeholder='January 1, 2019' />
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <input onChange={(e)=>props.handleChange(e)} name="enddate" value={props.enddate} placeholder='January 5, 2019' />
        </Form.Field>
        <Button type='submit' onClick={props.createTrip}>Next</Button>
      </Form>
    </Container>
  </div>
  )
}

export default NewTripForm
