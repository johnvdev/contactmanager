import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="ContactManager" />
        <Contact
          name="John Doe"
          email="jdoe@hotmail.com"
          phone="555-555-5555"
        />
        <Contact name="karen kay" email="kk@hotmail.com" phone="555-555-5555" />
      </div>
    );
  }
}

export default App;
