import React from 'react';
import { Input, Textarea } from './Input';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = React.useState<string>('');
  const [mail, setMail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  return (
    <form className={styles.contactform}>
      <div className={styles.row}>
        <Input label="Your name" id="contact-name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Your mail" id="contact-mail" type="email" placeholder='Your mail' value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
        <Textarea label="Your message" id="contact-message" placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
  );
};

export default ContactForm;