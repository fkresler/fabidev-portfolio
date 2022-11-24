import Container from '../Container';
import ContactForm from '../ContactForm';
import Typography from '../Typography';

const ContactPage = async () => (
  <>
    <Container element="section">
      <Typography element="h1">Get in touch with me</Typography>
    </Container>
    <Container element="section">
      <Typography element="h2">I would love to hear from you</Typography>
      <ContactForm />
    </Container>
  </>
);

export default ContactPage;
