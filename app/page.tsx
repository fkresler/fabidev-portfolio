import Container from './Container';
import ContactForm from './ContactForm';

const IndexPage = async () => (
  <>
    <Container>
      <h1>Hi I am Fabian Kresler</h1>
    </Container>
    <Container headline="About me">
      <p>
        Hey I am Fabian. I am primarily a frontend developer with experience in backend development, API design and
        UX/UI as well. I believe digital experiences can improve and help the life of people and make the world a better
        place.
      </p>
    </Container>
    <Container headline="Experiences & Education">
      <ul>
        <li>University Coburg: Bachelor of applied Sciences</li>
        <li>empiriecom GmbH & Co. KG: Frontend developer</li>
      </ul>
    </Container>
    <Container headline="Services">
      <ul>
        <li>Web development</li>
        <li>API design</li>
        <li>UX/UI</li>
      </ul>
    </Container>
    <Container headline="Works">
      <ul>
        <li>MyFavoriteLeague</li>
        <li>Destiny Todos</li>
        <li>Discord raid organizer bot</li>
      </ul>
    </Container>
    <Container headline="Get in touch" contentSize="sm">
      <ContactForm />
    </Container>
  </>
);

export default IndexPage;
