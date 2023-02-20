import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
// import ContactCard from './ContactCard';
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "";
  const [Contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (AddContact) => {
    console.log("this  is Addcontact AddContact", AddContact);
    setContacts([...Contacts, { id: uuid(), ...AddContact }]);
  };

  // useEffect(()=>{
  //   const retriveContacts = ;
  //   if(retriveContacts) setContacts(retriveContacts)
  // },[])

  const removeContactHandler = (id) => {
    const newContactList = Contacts.filter((Contact) => {
      return Contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
  }, [Contacts]);

  return (
    <div className="ui container">
      <Router>
        <Switch>
        <Route path="/" exact component={() => (<ContactList Contacts = {Contacts} getContactId={removeContactHandler}/>)}/>
        <Route path="/add" component={()=>(<AddContact addContactHandler={addContactHandler}/>)}/>
        </Switch>
        {/* <ContactList Contacts = {Contacts} addContactHandler={addContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
