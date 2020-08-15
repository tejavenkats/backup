import React from "react";
import contacts from "./contacts";
import Contacts from "./Contacts";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contacts
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contacts
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contacts
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
