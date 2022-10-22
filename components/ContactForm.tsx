import React from 'react';

const ContactForm = () => {
  return (
    <form>
        <label label-for="contact-name">Your name</label>
        <input id="contact-name" name="contact-name" type="text" />
        <label label-for="contact-mail">Your mail</label>
        <input id="contact-mail" name="contact-mail" type="email" />
        <label label-for="contact-message">Your message</label>
        <textarea id="contact-message" name="contact-message" />
        <button type="submit">Send</button>
      </form>
  );
};

export default ContactForm;