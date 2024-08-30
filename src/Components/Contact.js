import React, { useState} from 'react'
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display a success message
    console.log(formData);
  };

  return (
    
    <div className="container">
    <h2 className="heading">Get In Touch</h2>
    <div className="left-side">
      <div className="thank-you-text">Thank You</div>
      <div className="query-text">Do You Have Any Queries?</div>
    </div>
    <div className="right-side">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"
              value={formData.name}
              onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"
              value={formData.email}
              onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name='message' rows="4" 
              value={formData.message}
              onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
};

export default Contact;
