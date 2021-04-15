import { Container, Wrapper } from './styles';

const Section = ({ about }) => {
  return (
    <Container
      style={{ color: `${about.color}`, backgroundImage: `url(${about.bg})` }}
    >
      <Wrapper>
        <h1>{about.title}</h1>
        <p>{about.subtitle}</p>
      </Wrapper>
    </Container>
  );
};

export default Section;
