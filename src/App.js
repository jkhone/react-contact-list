import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

function App(props) {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}></Route>
        <Route path = '/contact/:id' component = {Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
