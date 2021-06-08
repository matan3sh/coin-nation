import { Container, AboutImage, Content } from './styles';

const About = () => {
  return (
    <Container className='about' id='About'>
      <AboutImage className='about__image'>
        <img src='/images/about/a-scaled.jpg' alt='about' />
      </AboutImage>
      <Content className='about__content'>
        <h1>About The Hackathon</h1>
        <p>
          This Fintech Hackathon is about finding solutions to challenges banks
          currently have on their platforms and services. We want you to have
          access to the world’s top online talents within our community that
          will solve these challenges.
        </p>
        <a
          href='https://fintechhackathon.devpost.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Register Now
        </a>
      </Content>
    </Container>
  );
};

export default About;
