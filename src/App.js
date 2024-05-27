
import './App.css';
import { Navbar } from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import {
//   Router,
  
//   Route
  
// } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      
      {/* <switch>
      <Route exact path='/'><News pageSize={9} country='in' category='general' /> </Route> */}
      {/* <Route path='/science'> <News pageSize={9} country='in' category='science' /> </Route>
      <Route path='/technology'> <News pageSize={9} country='in' category='technology' /> </Route>
      <Route path='/sports'> <News pageSize={9} country='in' category='sports' /> </Route>
      <Route path='/health'> <News pageSize={9} country='in' category='health' /> </Route>
      <Route path='/entertainment'> <News pageSize={9} country='in' category='entertainment' /> </Route>
      <Route path='/business'> <News pageSize={9} country='in' category='business' /> </Route> */}

      

      {/* </switch> */}


     <Routes>
      <Route exact path='/' element={ <News key='general' pageSize={9} country='in' category='general' /> }>  </Route>
      <Route exact path='/science' element={<News key='science' pageSize={9} country='in' category='science' /> }>  </Route>
      <Route exact path='/technology' element={ <News key='technology' pageSize={9} country='in' category='technology' /> }>  </Route>
      <Route exact path='/sports' element={ <News key='sports' pageSize={9} country='in' category='sports' /> }>  </Route>
      <Route exact path='/health' element={ <News key='health' pageSize={9} country='in' category='health' /> }>  </Route>
      <Route exact path='/entertainment' element={ <News key='entertainment' pageSize={9} country='in' category='entertainment' /> }>  </Route>
      <Route exact path='/business' element={ <News key='business' pageSize={9} country='in' category='business' /> }>  </Route>

      </Routes>

      
      </Router>
      </>
    )
  }
}
