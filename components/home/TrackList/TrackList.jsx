import { Container, Wrapper, Card } from './styles';

const TrackList = ({ data }) => {
  return (
    <Container>
      <h2>The Tracklist</h2>
      <Wrapper>
        {data.map((item) => (
          <Card>
            <h3>{item}</h3>
            <h5>Share your ideas and find your Team on Discord</h5>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default TrackList;
