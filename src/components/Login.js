import React from "react";
import { Redirect } from "react-router-dom";

import { Form, Button, Header, Container } from 'semantic-ui-react'


class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      toHome: false,
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    const user = this.props.users.find(user => user.email === this.props.email && user.password === this.props.password)
    if (!!user) {
      localStorage.setItem('id', user.id)
      this.props.successfullyLoggedIn()
      this.props.fetchMyTrips()
      this.setState({
        toHome: !this.state.toHome,
      })
    } else {
      return alert("Please double check your email or password.")
    }
  }

  render() {
    if(this.state.toHome){
      return <Redirect to="/"/>
    }
    return (
      <Container text style={{ marginTop: '7em' }}>
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
          <Button type='submit' onClick={this.handleLogin}>Log In</Button>
        </Form>
      </Container>
    )
  }
}
export default Login
