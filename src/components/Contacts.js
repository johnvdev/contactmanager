import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@hotmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "karren will",
          email: "karrenw@hotmail.com",
          phone: "555-555-5555"
        },
        {
          id: 3,
          name: "jeff johnston",
          email: "jeffj@hotmail.com",
          phone: "555-555-5555"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
