import Container from '../Container';
import ContactForm from '../ContactForm';

const ContactPage = async () => (
  <>
    <Container>
      <h1>Get in touch with me</h1>
    </Container>
    <Container headline="I would love to hear from you">
      <ContactForm />
    </Container>
  </>
);

export default ContactPage;
