import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container, Menu, Image } from 'semantic-ui-react'
import './App.css';

import Login from './components/Login'
import SignUp from './components/SignUp'
import Trip from './components/Trip'
import MainPage from "./containers/MainPage"
import TripContainer from './containers/TripContainer'
import Dashboard from './containers/Dashboard'

class App extends Component {

//LIFECYCLE & STATE*************************************************************
  state={
    users: [],
    usertrip: "",
    trip:"",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    loggedIn: false,
    startdate: "",
    enddate: "",
    formSubmitted: false,
    searchTerm: "",
    location: "",
    myTrips: [],
    returnedRestaurants:[],
    justLoggedOut: false,
  }

  componentDidMount(){
    this.fetchUsers()
    this.fetchMyTrips()
  }

  //FETCH***********************************************************************
  fetchMyTrips = () => {
    fetch("http://localhost:3000/api/v1/trips")
    .then(res => res.json())
    .then(trips => {
      let allUserTrips = trips.map( trip => trip.user_trips)
      // console.log(allUserTrips)
      let myUserTrips = allUserTrips.filter( userTrip => userTrip[0].user_id === parseInt(localStorage.id))
      // console.log(myUserTrips)
      let myTrips = myUserTrips.map( myUserTrip => myUserTrip[0].trip)
      // console.log(myTrips)
      this.setState({
        myTrips
      }, ()=> console.log(this.state.myTrips))
    })
  }

  fetchUsers = () => {
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(users => {
      this.setState({
        users: users
      }, () => console.log("fetched users", this.state.users))
    })
  }

  //HELPER FUNCTIONS************************************************************

  //controlled form helper******************************************************
  handleChange = (e) => {
    // debugger
    this.setState({ [e.target.name]: e.target.value })
  }

  //login logout signup helpers*************************************************
  createAccount = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    }
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('id',user.id)
      this.setState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        users: [...this.state.users, user]
      })
    })
  }

  successfullyLoggedIn = (e) => {
    this.setState({
      email: "",
      password: "",
      loggedIn: true,
      justLoggedOut: false,
    })
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({
      users: [],
      usertrip: "",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      loggedIn: false,
      startdate: "",
      enddate: "",
      formSubmitted: false,
      searchTerm: "",
      location: "",
      myTrips: [],
      returnedRestaurants:[],
    })
  }

  //trip helpers************************************************************
  renderNewTripForm = () => {
    this.setState({
      formSubmitted: !this.state.formSubmitted,
      location: "",
      startdate: "",
      enddate:"",
    })
  }

  createTrip = (e) => {
    e.preventDefault()
    const data = {
      location: this.state.location,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
    }
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(trip => {
      this.setState({
        myTrips: [...this.state.myTrips,trip]
      })
      fetch('http://localhost:3000/api/v1/user_trips', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accdepts':'application/json'
        },
        body: JSON.stringify({
          user_id: localStorage.id,
          trip_id: trip.id
        })
      })
      .then(r => r.json())
      .then(usertrip => {
        this.setState({
          usertrip
        }, () => console.log(this.state.usertrip))
      })
    })
    this.setState({
      formSubmitted: !this.state.formSubmitted,
    })
  }

  //search helpers**************************************************************
  handleSubmit = (e) => {
    e.preventDefault()
    this.handleRestaurantSearch(this.state.searchTerm, this.state.location)
  }

  handleRestaurantSearch = (searchTerm, location) => {
    const data = {searchTerm: searchTerm, location: location}
    fetch("http://localhost:3000/api/v1/restaurant_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(restaurants => {
      this.setState({
        returnedRestaurants: restaurants.businesses,
        searchTerm:""
      }, () => console.log(this.state.returnedRestaurants))
    })
  }

  deleteThisTrip = (tripToDelete) => {
    console.log("delete this trip", tripToDelete)
    let updatedTrips = this.state.myTrips.filter(trip => trip !== tripToDelete)
    this.setState({
      myTrips: updatedTrips
    })
    fetch(`http://localhost:3000/api/v1/trips/${tripToDelete.id}`, {
      method: "DELETE"
    })
  }
  //event helpers***************************************************************
  addEventToTrip = (restaurant) => {
    console.log("clicked", restaurant, this.state.usertrip.id)
    const data = {
      date: "",
      time: "",
      name: restaurant.name,
      address: restaurant.location.display_address[0],
      address1: restaurant.location.display_address[1],
      address2: restaurant.location.display_address[2],
      latitude: restaurant.coordinates.latitude,
      longitude: restaurant.coordinates.longitude,
      phone: restaurant.display_phone,
      rating: restaurant.rating,
      price: restaurant.price,
      url: restaurant.url,
      imgurl: restaurant.image_url,
      user_trip_id: this.state.usertrip.id,
    }
    fetch("http://localhost:3000/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(console.log)
  }

  //RENDER**********************************************************************
  render() {
    return (
      <div className="App">
        <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            GoGoGo
          </Menu.Item>
          <Menu.Item as={Link} to="/">Home</Menu.Item>
          <Menu.Item as={Link} to="/login">Login</Menu.Item>
          <Menu.Item as={Link} to="/signup">Sign Up</Menu.Item>
          <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
          <Menu.Item as={Link} to="/trip/new">Create New Trip</Menu.Item>
          <Menu.Item onClick={this.handleLogout} as={Link} to ="/login">Sign Out</Menu.Item>
        </Container>
        </Menu>

        <Route path="/" exact component={MainPage} />
        <Route path="/login"
          render={(props) => <Login
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            successfullyLoggedIn={this.successfullyLoggedIn}
            fetchMyTrips={this.fetchMyTrips}
          />}
        />
        <Route path="/signup"
          render={(props) => <SignUp
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            password={this.state.password}
            email={this.state.email}
            handleChange={this.handleChange}
            createAccount={this.createAccount}
          />}
        />
        <Route path="/dashboard"
          render={(props) => <Dashboard
            myTrips={this.state.myTrips}
            deleteThisTrip={this.deleteThisTrip}
          />}
        />
        <Route path="/trips/:id"
          render={(props) => <Trip
            {...props}
          />}
        />
        <Route path="/trip/new"
          render={(props) => <TripContainer
            startdate={this.state.startdate}
            enddate={this.state.enddate}
            formSubmitted={this.state.formSubmitted}
            handleChange={this.handleChange}
            createTrip={this.createTrip}
            returnedRestaurants={this.state.returnedRestaurants}
            searchTerm={this.state.searchTerm}
            location={this.state.location}
            handleSubmit={this.handleSubmit}
            addEventToTrip={this.addEventToTrip}
            usertrip={this.state.usertrip}
            renderNewTripForm={this.renderNewTripForm}
          />}
        />
      </div>

    );
  }
}

export default App;
