import React from "react";
import { Redirect, Link } from "react-router-dom";
import {Animated} from "react-animated-css";
import smallLogo from './smallgogologo.png'

import { Form, Button, Header, Grid, Message, Image } from 'semantic-ui-react'


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
      <div>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}
      </style>
      <Animated animationIn="headShake" isVisible={true}>
        <Grid textAlign='center' style={{ height: '100%', marginTop: "7em" }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" style={{marginTop: "7em"}}>
              <Image src={smallLogo} avatar/>
              <Header as="h2" color="yellow">Log In</Header>
              <Form.Field>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={(e) => this.props.handleChange(e)}
                  name="email"
                  value={this.props.email}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(e) => this.props.handleChange(e)}
                  name="password"
                  value={this.props.password}
                />
              </Form.Field>
              <Button color="yellow" fluid size = 'large' type='submit' onClick={this.handleLogin}>Log In</Button>
            </Form>
            <div style={{ marginTop: '1.5em'}}>
              <Message>Don't have an account? <Link to="/signup">Sign up here!</Link></Message>
            </div>
          </Grid.Column>
        </Grid>
      </Animated>
      </div>
    )
  }
}
export default Login
