import ContactForm from './ContactForm';

const IndexPage = async () => (
  <>
    <h1>Hi I am Fabian Kresler</h1>
    <section>
      <h2>About me</h2>
      <p>
        Hey I am Fabian. I am primarily a frontend developer with experience in backend development, API design and
        UX/UI as well. I believe digital experiences can improve and help the life of people and make the world a better
        place.
      </p>
    </section>
    <section>
      <h2>Experiences & education</h2>
      <ul>
        <li>University Coburg: Bachelor of applied Sciences</li>
        <li>empiriecom GmbH & Co. KG: Frontend developer</li>
      </ul>
    </section>
    <section>
      <h2>Services</h2>
      <ul>
        <li>Web development</li>
        <li>API design</li>
        <li>UX/UI</li>
      </ul>
    </section>
    <section>
      <h2>Recent works</h2>
      <ul>
        <li>MyFavoriteLeague</li>
        <li>Destiny Todos</li>
        <li>Discord raid organizer bot</li>
      </ul>
    </section>
    <section>
      <h2>Get in touch</h2>
      <ContactForm />
    </section>
  </>
);

export default IndexPage;
