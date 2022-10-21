import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout title="Contact">
    <h1>Get in touch with me</h1>
    <h2>I would love to hear from you</h2>
    <section>
      <form>
        <label label-for="contact-name">Your name</label>
        <input id="contact-name" name="contact-name" type="text" />
        <label label-for="contact-mail">Your mail</label>
        <input id="contact-mail" name="contact-mail" type="email" />
        <label label-for="contact-message">Your message</label>
        <textarea id="contact-message" name="contact-message" />
        <button type="submit">Send</button>
      </form>
    </section>
  </Layout>
);

export default ContactPage;
