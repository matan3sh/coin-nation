import {
  Container,
  Wrapper,
  Headline,
  Title,
  Year,
  Text,
  Buttons,
} from './styles';

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>
          <span>2021</span> Top Summit
        </Headline>
        <Title>Coin Nations</Title>
        <Title>
          Summit <Year>2021</Year>
        </Title>
        <Text>
          This Is The New Coin Nations Economy. <br />
          We’re bringing creators, crypto natives and new coin
          <br /> possibilies together to move the future forward.
        </Text>
        <Buttons>
          <a href='/#' className='color-btn'>
            Sign up now
          </a>
          <a href='/#'>
            <img src='/static/images/hero/discord.png' alt='discord' /> Join
            Discord
          </a>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Hero;
