import React from "react"
import { Card } from "semantic-ui-react"

const Trip = (props) => {
  return (
  <div className="">
  <Card>
    {props.trip.location}
    {props.trip.startdate}
    {props.trip.enddate}
  </Card>
  </div>
  )
}

export default Trip
