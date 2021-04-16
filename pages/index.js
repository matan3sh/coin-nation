import { Hero, Section } from 'components/home';
import { Header } from 'components/layout';

import { about, invite, aspect } from 'data';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section data={about} />
      <Section data={invite} />
      <Section data={aspect} />
    </>
  );
};

export default Home;
