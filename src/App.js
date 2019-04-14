import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Container, Menu } from 'semantic-ui-react'
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
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    loggedIn: false,
    startdate: "",
    enddate: "",
    formSubmitted: false,
    searchTerm: "",
    searchCategory: "",
    location: "",
    tripLocation: "",
    myTrips: [],
    returnedBusinesses:[],
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
      let myUserTrips = allUserTrips.filter( userTrip => userTrip[0].user_id === parseInt(localStorage.id))
      let myTrips = myUserTrips.map( myUserTrip => myUserTrip[0].trip)
      this.setState({ myTrips })
    })
  }

  fetchUsers = () => {
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(users => {
      this.setState({ users })
    })
  }

  //HELPER FUNCTIONS************************************************************

  //controlled form helper******************************************************
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  setCategoryState = (cat) => {
    this.setState({
      searchCategory: cat
    })
  }

  //login logout signup helpers*************************************************
  createAccount = (e) => {
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
      returnedBusinesses:[],
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

  titleCase = (str) => {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
  }

  createTrip = (e) => {
    e.preventDefault()
    const data = {
      location: this.titleCase(this.state.location),
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
        this.setState({ usertrip })
      })
    })
    this.setState({
      formSubmitted: !this.state.formSubmitted,
    })
  }

  //search helpers**************************************************************
  handleSubmit = (e) => {
    e.preventDefault()
    switch(this.state.searchCategory){
      case "Restaurants":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "restaurant_search")
        break;
      case "Arts":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "arts_search")
        break;
      case "Hotels":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "hotel_search")
        break;
      case "Nightlife":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "nightlife_search")
        break;
      case "Souvenirs":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "souvenir_search")
        break;
      case "Tours":
        this.handleCategorySearch(this.state.searchTerm, this.state.location, "tour_search")
        break;
      default:
        console.log("How did you even hit this point?", this.state.tripLocation)
        break;
    }
  }

  handleCategorySearch = (searchTerm, location, cat) => {
    const data = {searchTerm: searchTerm, location: location}
    fetch("http://localhost:3000/api/v1/" + cat, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(businesses => {
      this.setState({
        returnedBusinesses: businesses.businesses,
        searchTerm:""
      }, () => console.log(this.state.returnedBusinesses))
    })
  }

  setTripLocation = (tripLocForAdditionalEvent, thisusertrip) => {
    this.setState({
      tripLocation: tripLocForAdditionalEvent,
      usertrip: thisusertrip
    }, ()=> console.log(this.state.tripLocation, this.state.searchCategory, this.state.usertrip))
  }

  handleAdditionalSubmit = (e) => {
    e.preventDefault()
    switch(this.state.searchCategory){
      case "Restaurants":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "restaurant_search")
        break;
      case "Arts":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "arts_search")
        break;
      case "Hotels":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "hotel_search")
        break;
      case "Nightlife":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "nightlife_search")
        break;
      case "Souvenirs":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "souvenir_search")
        break;
      case "Tours":
        this.handleCategorySearch(this.state.searchTerm, this.state.tripLocation, "tour_search")
        break;
      default:
        console.log("How did you even hit this point?")
        break;
    }
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
  addEventToTrip = (business) => {
    console.log("in addEventToTrip function in App", this.state.usertrip)
    const data = {
      date: "",
      time: "",
      name: business.name,
      address: business.location.display_address[0],
      address1: business.location.display_address[1],
      address2: business.location.display_address[2],
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
      phone: business.display_phone,
      rating: business.rating,
      price: business.price,
      url: business.url,
      imgurl: business.image_url,
      user_trip_id: this.state.usertrip.id,
      cat: this.state.searchCategory,
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
          <Menu.Item as={Link} to="/">GoGoGo</Menu.Item>
          <Menu.Item as={Link} to="/login">Login</Menu.Item>
          <Menu.Item as={Link} to="/signup">Sign Up</Menu.Item>
          <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
          <Menu.Item as={Link} to="/trip/new">Create New Trip</Menu.Item>
          <Menu.Item onClick={this.handleLogout} as={Link} to ="/login">Sign Out</Menu.Item>
        </Container>
        </Menu>

        <Route path="/" exact component={MainPage}/>
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
            handleChange={this.handleChange}
            handleSetCategory={this.handleSetCategory}
            handleAdditionalSubmit={this.handleAdditionalSubmit}
            handleCategorySearch={this.handleCategorySearch}
            searchTerm={this.props.searchTerm}
            searchCategory={this.props.searchCategory}
            setTripLocation={this.setTripLocation}
            setCategoryState={this.setCategoryState}
            returnedBusinesses={this.state.returnedBusinesses}
            addEventToTrip={this.addEventToTrip}
          />}
        />
        <Route path="/trip/new"
          render={(props) => <TripContainer
            startdate={this.state.startdate}
            enddate={this.state.enddate}
            formSubmitted={this.state.formSubmitted}
            handleChange={this.handleChange}
            createTrip={this.createTrip}
            returnedBusinesses={this.state.returnedBusinesses}
            searchTerm={this.state.searchTerm}
            searchCategory={this.state.searchCategory}
            location={this.state.location}
            setCategoryState={this.setCategoryState}
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
