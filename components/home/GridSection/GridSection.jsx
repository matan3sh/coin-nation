import { Container, List } from './styles';

const GridSection = ({ data, title, link }) => {
  return (
    <Container id={link}>
      <h1>{title}</h1>
      <List>
        {data.map((partner, key) => (
          <img src={partner} alt='' key={key} />
        ))}
      </List>
    </Container>
  );
};

export default GridSection;
