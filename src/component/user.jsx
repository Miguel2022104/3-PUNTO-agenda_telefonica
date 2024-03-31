import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";
import Add from "./add";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="agenda-telefonica">
      <Add />
      <h2 className="heading">List of Contacts</h2>
      <div className="contacts-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.identify}>
            <img src={contact.image} className="contact-image" alt="Contact" />
            <div className="contact-details-wrapper">
              <p className="detail-text">Identify: {contact.identify}</p>
              <h5 className="name-text">Names: {contact.names}</h5>
              <p className="detail-text">Telephone: {contact.telephone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;




