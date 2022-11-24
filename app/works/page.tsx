import Container from '../Container';
import Typography from '../Typography';

const WorksPage = async () => (
  <>
    <Container element="section">
      <Typography element="h1">Some of the stuff I have worked on</Typography>
    </Container>
    <Container element="section">
      <Typography element="h2">Scroll around and find out</Typography>
      <ul>
        <li>
          <Typography>Discord Raid Organizer Bot</Typography>
        </li>
        <li>
          <Typography>MyFavoriteLeague</Typography>
        </li>
        <li>
          <Typography>Destiny Goal Organizer</Typography>
        </li>
      </ul>
    </Container>
  </>
);

export default WorksPage;
