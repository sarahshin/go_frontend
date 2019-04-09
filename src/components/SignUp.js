import React from "react";
import { Form, Button, Header } from 'semantic-ui-react'

class SignUp extends React.Component {

  render() {
    return (
    <div className="signup">
      <Form>
        <Header as="h3">Registration Form</Header>
        <Form.Field>
          <label>First Name</label>
          <input
            onChange={(e) => this.props.handleChange(e)}
            name="firstname"
            value={this.props.firstname}
            placeholder='First Name'
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            onChange={(e) => this.props.handleChange(e)}
            name="lastname"
            value={this.props.lastname}
            placeholder='Last Name'
          />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input
            onChange={(e) => this.props.handleChange(e)}
            name="email"
            value={this.props.email}
            placeholder='E-mail'
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            onChange={(e) => this.props.handleChange(e)}
            type="password"
            name="password"
            value={this.props.password}
            placeholder='Password'
          />
        </Form.Field>
        <Button type='submit' onClick={this.props.createAccount}>Register</Button>
      </Form>
    </div>
    )
  }
}
export default SignUp