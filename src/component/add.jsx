import React, { useState } from 'react';
import axios from 'axios';
import "./add_user.css";

const Add = () => {
  const [formData, setFormData] = useState({
    names: '',
    telephone: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", formData);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add-user-container'>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="names">Names</label>
          <input type="text" name="names" id="names" placeholder="Type your names" value={formData.names} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telephone">Telephone</label>
          <input type="text" name="telephone" id="telephone" placeholder="Enter your phone number" value={formData.telephone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" placeholder="Enter image URL" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Add;
