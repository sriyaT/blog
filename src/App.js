import React from 'react';

import './App.css';
import Home from './Containers/Home';
import Header from './Components/Headers';
import Hero from './Components/Hero';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactUs from './Containers/ContactUs';
import Post from './Containers/Post/index';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post/:postId" component={Post} />
        
      </div>
    </Router>
    
  );
}

export default App;
