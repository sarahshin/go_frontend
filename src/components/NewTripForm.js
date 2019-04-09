import React from "react"
import { Form, Button, Header } from 'semantic-ui-react'

const NewTripForm = (props) => {

  return (
  <div className="newtrip">
    <Form>
      <Header as="h3">Start Planning New Trip</Header>
      <Form.Field>
        <label>Location</label>
        <input onChange={(e) => props.handleChange(e)} name="triplocation" value={props.triplocation} placeholder='City' />
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
  </div>
  )
}

export default NewTripForm
