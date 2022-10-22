import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout title="Contact">
    <h1>Get in touch with me</h1>
    <h2>I would love to hear from you</h2>
    <section>
      <ContactForm /> 
    </section>
  </Layout>
);

export default ContactPage;
