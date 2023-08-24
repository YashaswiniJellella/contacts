import React  from "react"
import {Link} from "react-router-dom";
import Contactcard from "./contactcard";
const Contactlist= (props) =>
{
    console.log(props);
    const deleteContactHandler= (id) => {
        props.getContactId(id);
    };
   
    const renderContactlist= props.contacts.map((contact) => {
        return (<Contactcard
             contact={contact} 
             clickHandler={deleteContactHandler}
              key={contact.id}
              />
    );
    });
    return( 
       <div className="ui main"> 
        <h2>cont act list</h2>
        <Link to="/add">
        
        <button className="ui button blue right">Add contact</button>
        </Link>
        <div className="ui celled list"> {renderContactlist} </div></div>
    );
};

export default Contactlist;