import React, { Component } from 'react';
import { HashRouter as Router, Route,  NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const photos = [
  {
    name: 'pic1',
    id:'1',
    key:'1',
    url:"https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: 'pic2',
    id:'2',
    key:'2',
    url:"https://images.unsplash.com/photo-1512412046876-f386342eddb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: 'pic3',
    id:'3',
    key:'3',
    url:"https://images.unsplash.com/photo-1510846699902-9211b99dac11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
  },
  {
    name: 'pic4',
    id:'4',
    key:'4',
    url:"https://images.unsplash.com/photo-1544298621-35a764866ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
  }
]

class App extends Component {
  render() {
    var settings = {
      dots: true,
      arrows:false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <Router basename="/signup/">
        <div className="App">
        <div className="App__Aside">
        <Slider {...settings}>
          {photos.map((photo,i)=>{
            return(
              <div>
                <img width="100%" alt="tennis" key={i} src={photo.url}/>
              </div>
            )
          })}
          </Slider>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
