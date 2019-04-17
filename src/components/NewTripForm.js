import React from "react"
import CalendarRange from "./CalendarRange"

import { Form, Button, Header, Grid } from 'semantic-ui-react'

const NewTripForm = (props) => {

  return (
  <div className="newtrip">
    <Grid textAlign='center' style={{ height: '100%', marginTop: "7em" }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" style={{marginTop: "7em"}}>
          <Header as="h2" color="yellow">Start Planning A New Trip</Header>
          <Form.Field>
            <Form.Input
              fluid icon='world'
              iconPosition='left'
              placeholder='City'
              onChange={(e) => props.handleChange(e)}
              name="location"
              value={props.location}
            />
          </Form.Field>
          <Form.Field>
            <Header style={{ marginTop: '1.5em' }} as="h4">Select Date Range</Header>
            <CalendarRange handleStartDate={props.handleStartDate} handleEndDate={props.handleEndDate} startdate={props.startdate} enddate={props.enddate}/>
          </Form.Field>
          <Button style={{ marginTop: '1.5em' }} color="yellow" fluid size = 'large' type='submit' onClick={props.createTrip}>Next</Button>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
  )
}

export default NewTripForm
