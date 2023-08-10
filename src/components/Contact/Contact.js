import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }
        if (!formData.email.includes("@")) {
            alert("Please provide a valid email address.");
            return;
        }
        // Here, you can send the formData to an API or handle as needed.
        alert("Message sent successfully!");
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default Contact;

