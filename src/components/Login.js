import React from "react";
import { Form, Button, Header } from 'semantic-ui-react'


class Login extends React.Component {

  render() {
    return (
      <Form>
        <Header as="h3">Log In</Header>
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
        <Button type='submit' onClick={this.props.handleLogin}>Log In</Button>
      </Form>
    )
  }
}
export default Login
