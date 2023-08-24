import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {v4} from 'uuid';
import "./App.css";
import Header from "./header";
import Addcontact from "./addcontact";
import Contactlist from "./contactlist";
import Contactdetail from "./contactdetail";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
    const addContactHandler= (contact) =>
    {
      console.log(contact);
      setContacts([...contacts,{id:v4(),...contact}]);
    };
    const removeContactHandler = (id) =>{
      const newContactlist =contacts.filter((contact)=> {
        return contact.id!==id;
      });
      setContacts(newContactlist);
    };
    useEffect(() =>{
      const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) setContacts(retriveContacts);
    },[]);
    useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);
  return (
    <div className="ui container">
      <Router>
    <Header />
    <Routes>
   <Route path="/add" Component={(props) => (<Addcontact{...props} addContactHandler={addContactHandler}/>)}/>
    <Route path="/"  Component={(props) => (<Contactlist {...props} contacts={contacts} getContactId={removeContactHandler}/>)}/>
    <Route path="/contact/:id" component={Contactdetail}/>
    </Routes>
   </Router>
    </div>
    );
}

export default App;
