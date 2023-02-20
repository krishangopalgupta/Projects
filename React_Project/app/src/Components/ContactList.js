import React from "react";
import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id)=>{
    props.getContactId(id)
  }
  

  const renderContactList = props.Contacts.map((Contact) => {
    return (
        <ContactCard  Contact={Contact} clickHandler={deleteContactHandler} key={Contact.id}/>
    );
  });

  return(
    <div className="main">
      <h2>Contact Manager</h2>
      <Link to='/add'><button className="ui button blue right"> Go to add</button></Link>
      <div className="ui celled list">{renderContactList}</div>;
    </div>
  )
};
export default ContactList;
