import {
  Container,
  Wrapper,
  Headline,
  Title,
  Year,
  Text,
  Buttons,
  Supporters,
  Date,
} from './styles';

const Hero = () => {
  return (
    <Container id='Hero'>
      <Wrapper>
        <Headline>
          <span>2021</span> Top Summit{' '}
        </Headline>
        <Title>Coin Nations</Title>
        <Title>
          Summit <Year>2021</Year>
        </Title>
        <Text>
          {/* This Is The New Coin Nations Economy. <br /> */}
          September 29-30, 2021 Virtual Global Summit <br />
          We’re bringing creators, crypto natives and new coin
          <br /> possibilies together to move the future forward.
        </Text>
        <Buttons>
          <a
            href='https://next.brella.io/join/CoinNations2021'
            target='_blank'
            rel='noopener noreferrer'
            className='color-btn'
          >
            Sign up now
          </a>
          <a
            href='https://discord.gg/fUaJesQkFb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/static/images/hero/discord.png' alt='' />
            <span>Join Discord</span>
          </a>
        </Buttons>
        <Supporters>
          <h3>Our Partners</h3>
          <div>
            {/* <img
              src='/static/images/supporters/Kraken.png'
              width={96}
              height={54}
            /> */}
            <img
              src='/static/images/supporters/Circle.png'
              width={96}
              height={54}
            />
            <img
              src='/static/images/supporters/Visa.png'
              width={84}
              height={26.5}
            />
          </div>
        </Supporters>
      </Wrapper>
    </Container>
  );
};

export default Hero;
