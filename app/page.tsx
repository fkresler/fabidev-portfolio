import Container from './Container';
import ContentGallery from './ContentGallery';
import Card from './Card';
import ContactForm from './ContactForm';
import Typography from './Typography';

const IndexPage = async () => (
  <>
    <Container element="section">
      <Typography element="h1">Hi I am Fabian Kresler</Typography>
    </Container>
    <Container element="section">
      <Typography element="h2">About me</Typography>
      <Typography>
        Hey I am Fabian. I am primarily a frontend developer with experience in backend development, API design and
        UX/UI as well. I believe digital experiences can improve and help the life of people and make the world a better
        place.
      </Typography>
    </Container>
    <Container element="section">
      <Typography element="h2">Experiences & Education</Typography>
      <ul>
        <li>
          <Typography>University Coburg: Bachelor of applied Sciences</Typography>
        </li>
        <li>
          <Typography>empiriecom GmbH & Co. KG: Frontend developer</Typography>
        </li>
      </ul>
    </Container>
    <Container element="section">
      <Typography element="h2">Services</Typography>
      <ContentGallery
        contents={[
          <Card key="webdevelopment">
            <Container>
              <Typography element="h3">Web development</Typography>
              <Typography>
                Web development is everything I know, it is in my blood. Seriously I have done frontend, I have done
                backend. I know somewhat how a browser works internally (not as easy with all the CSS and JS going on
                these days)
              </Typography>
            </Container>
          </Card>,
          <Card key="apidesign">
            <Container>
              <Typography element="h3">API design</Typography>
              <Typography>
                API design is necessary when working with backend data and I have worked a lot with fellow backend devs
              </Typography>
            </Container>
          </Card>,
          <Card key="uxui">
            <Container>
              <Typography element="h3">UX/UI</Typography>
              <Typography>
                I was working primarily as a frontend dev so I had a lot of touching points with our UI/UX team. I have
                learnt so many different things about it because of that (and the feedback about spaces or text being a
                few pixels off side)
              </Typography>
            </Container>
          </Card>,
        ]}
      />
    </Container>
    <Container element="section">
      <Typography element="h2">Works</Typography>
      <ContentGallery
        contents={[
          <Card key="myfavoriteleague">
            <Container>
              <Typography element="h3">MyFavoriteLeague</Typography>
              <Typography>
                This was a side project I started developing because I wanted to aquire knowledge in React when I was
                not working with React yet in my company. It pretty much is a app designed to organize the favorite
                characters to play out of at least 150 in each role and also to take notes for learning purposes.
              </Typography>
            </Container>
          </Card>,
          <Card key="destinytodos">
            <Container>
              <Typography element="h3">Destiny Todos</Typography>
              <Typography>
                This was another side project I started developing because I wanted to organize my things in another
                game and there has not been another tool that could fulfill what I needed. On top of it I wanted to use
                a different stack in order to gain more knowledge.
              </Typography>
            </Container>
          </Card>,
          <Card key="discordbotorganizer">
            <Container>
              <Typography element="h3">Discord raid organizer bot</Typography>
              <Typography>
                I was interested in coding a bot for a Discord channel for a clan I was part in in order to make it
                easier for us to organize timeslots and available members at specific times.
              </Typography>
            </Container>
          </Card>,
        ]}
      />
    </Container>
    <Container element="section">
      <Typography element="h2">Get in touch</Typography>
      <ContactForm />
    </Container>
  </>
);

export default IndexPage;
