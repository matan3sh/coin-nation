import {
  Container,
  Wrapper,
  Headline,
  Title,
  Year,
  Text,
  Buttons,
  Supporters,
} from './styles';

const Hero = () => {
  return (
    <Container id='Hero'>
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
          <a
            href='https://discord.gg/fUaJesQkFb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/static/images/hero/discord.png' alt='' />
            Join Discord
          </a>
        </Buttons>
        <Supporters>
          <h3>Our Partners</h3>
          <div>
            <img
              src='/static/images/supporters/Kraken.png'
              alt='discord'
              width='188'
              height='105'
            />
            <img
              src='/static/images/supporters/Circle.png'
              alt='discord'
              width='150'
              height='101'
            />
            <img
              src='/static/images/supporters/Visa.png'
              alt='discord'
              width='142'
              height='37'
            />
          </div>
        </Supporters>
      </Wrapper>
    </Container>
  );
};

export default Hero;
