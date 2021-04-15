import { Hero, Section } from 'components/home';
import { Header } from 'components/layout';

import { about } from 'data';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section about={about} />
    </>
  );
};

export default Home;
