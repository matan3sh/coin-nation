import { Container, Wrapper } from './styles';

const Section = ({ data }) => {
  return (
    <Container
      style={{
        color: `${data.color}`,
        backgroundImage: `url(${data.bg})`,
      }}
    >
      <Wrapper>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </Wrapper>
    </Container>
  );
};

export default Section;
