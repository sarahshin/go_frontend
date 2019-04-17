import React from "react";
import { Form, Button, Header, Grid, Message, Image } from 'semantic-ui-react'
import { Redirect, Link } from "react-router-dom";
import smallLogo from './smallgogologo.png'

class SignUp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      toHome: false,
    }
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.setState({
      toHome: !this.state.toHome
    })
    this.props.createAccount()
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />
    }
    return (
    <div className="signup">
      <Grid textAlign='center' style={{ height: '100%', marginTop: "7em" }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large" style={{marginTop: "5em"}}>
            <Image src={smallLogo} avatar/>
            <Header as="h2" color="yellow">Create an Account</Header>
            <Form.Field>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='First Name'
                onChange={(e) => this.props.handleChange(e)}
                name="firstname"
                value={this.props.firstname}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='Last Name'
                onChange={(e) => this.props.handleChange(e)}
                name="lastname"
                value={this.props.lastname}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail Address'
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
            <Button color="yellow" fluid size = 'large' type='submit' onClick={this.handleSignUp}>Register</Button>
          </Form>
          <div style={{ marginTop: '1.5em'}}>
            <Message>Already have an account? <Link to="/login">Log in!</Link></Message>
          </div>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
export default SignUp
