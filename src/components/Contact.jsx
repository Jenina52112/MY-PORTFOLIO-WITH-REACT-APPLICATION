// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value,
      });
  
      if (name === 'email') {
        if (value && !validateEmail(value)) {
          setErrors({
            ...errors,
            email: 'Invalid email address',
          });
        } else {
          setErrors({
            ...errors,
            email: '',
          });
        }
      } else if (value) {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    };
  
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
          setErrors({
            ...errors,
            [name]: 'This field is required',
          });
        } else if (name === 'email' && !validateEmail(value)) {
          setErrors({
            ...errors,
            email: 'Invalid email address',
          });
        } else {
          setErrors({
            ...errors,
            [name]: '',
          });
        }
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Check for any remaining validation errors before submission
      let valid = true;
      const newErrors = { ...errors };
      Object.keys(formState).forEach((field) => {
        if (!formState[field]) {
          newErrors[field] = 'This field is required';
          valid = false;
        } else if (field === 'email' && !validateEmail(formState[field])) {
            newErrors.email = 'Invalid email address';
            valid = false;
          }
      });
  
      setErrors(newErrors);
  
      if (valid) {
        // handle form submission logic here
        alert('Form submitted');
      }
    };
  
    return (
      <section className="section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  
  export default Contact;