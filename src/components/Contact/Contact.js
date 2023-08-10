import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default Contact;
