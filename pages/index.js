import { Hero, Section, GridSection, GridText } from 'components/home';
import { Header, Footer } from 'components/layout';

import {
  about,
  invite,
  aspect,
  ourPartnersData,
  ourSupportersData,
  ourSpeakersData,
  ourTeamData,
} from 'data';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section data={about} />
      <GridSection
        data={ourPartnersData}
        title='Our Partners'
        link='Partners'
      />
      <Section data={invite} />
      <GridSection
        data={ourSupportersData}
        title='Our Supporters'
        link='Supporters'
      />
      <Section data={aspect} />
      <GridText title='Our Speakers' data={ourSpeakersData} link='Speakers' />
      <GridText title='Our Team' data={ourTeamData} link='Team' />
      <Footer />
    </>
  );
};

export default Home;
