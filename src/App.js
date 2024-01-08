import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
 import {
   Routes,
   Route,
   BrowserRouter as Router
 } from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={< News  key='general' pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={5} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={5} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={5} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={5} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={5} country="in" category="technology"/>}></Route>
          </Routes>
          </Router>
      </div>
    )
  }
}
