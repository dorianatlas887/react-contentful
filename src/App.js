import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CoursesList from './components/CoursesList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CoursesList />
      </div>
    )
  }
}

export default App;
