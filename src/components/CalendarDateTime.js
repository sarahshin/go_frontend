import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'semantic-ui-react'
import moment from 'moment'

class CalendarDateTime extends React.Component {
  //LIFECYCLE & STATE **********************************************************
  constructor(props) {
    super(props);
    this.state = {
      eventDate: new Date(),
      eventTime: new Date(),
    };
    this.handleChange = this.handleChange.bind(this)
  }

  //HELPER FUNCTIONS ***********************************************************
  handleChange = (date) => {
    console.log(date)
    this.setState({
      eventDate: date
    })
  }

  //RENDER *********************************************************************
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              selected={new Date(moment(this.props.myTripStartDate))}
              onChange={()=>this.handleChange()}
              minDate={new Date(moment(this.props.myTripStartDate))}
              maxDate={new Date(moment(this.props.myTripEndDate))}
            />
          </Form.Field>
          <Form.Field>
            <label>Time</label>
            <DatePicker
              selected={this.state.eventTime}
              onChange={this.handleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
          </Form.Field>
          <Button color='google plus' type="submit" onClick={()=> console.log("update with these new deets")}>Update</Button>
        </Form>
      </React.Fragment>
    )
  }
}
export default CalendarDateTime
