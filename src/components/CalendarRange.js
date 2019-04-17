import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid } from 'semantic-ui-react'


class CalendarRange extends React.Component {

  //LIFECYCLE & STATE **********************************************************

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }

  //HELPER FUNCTIONS ***********************************************************

  handleChangeStart(date) {
    this.setState({
      startDate: date
    })
    this.props.handleStartDate(date)
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
    this.props.handleEndDate(date)
  }

  //RENDER *********************************************************************

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <p>from</p>
          <DatePicker
            fluid
            selected={this.state.startDate}
            selectsStart
            name="startdate"
            startDate={this.props.startdate}
            endDate={this.props.enddate}
            value={this.props.startDate}
            onChange={(e) => this.handleChangeStart(e)}
          />
        </Grid.Column>
        <Grid.Column>
          <p>to</p>
          <DatePicker
            fluid
            selected={this.state.endDate}
            selectsEnd
            name="enddate"
            startDate={this.state.startdate}
            endDate={this.state.enddate}
            value={this.props.endDate}
            onChange={(e)=> this.handleChangeEnd(e)}
          />
        </Grid.Column>
      </Grid>
    );
  }

}
export default CalendarRange
