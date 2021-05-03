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
          <a href='/#'>
            <img src='/static/images/hero/discord.png' alt='' />
            Join Discord
          </a>
        </Buttons>
        <Supporters>
          <h3>Our Partners</h3>
          <div>
            <img
              src='/static/images/supporters/jnext-logo.png'
              alt='discord'
              width='188'
              height='123'
            />
            <img
              src='/static/images/supporters/jvp-logo.png'
              alt='discord'
              width='112'
              height='51'
            />
            <img
              src='/static/images/supporters/leumitech-logo.png'
              alt='discord'
              width='188'
              height='37'
            />
          </div>
        </Supporters>
      </Wrapper>
    </Container>
  );
};

export default Hero;
