import { Hero, Section, GridSection, GridText } from 'components/home';
import { Header, Footer } from 'components/layout';

import {
  about,
  invite,
  aspect,
  ourPartnersData,
  ourSupportersData,
  ourJudges,
  ourSpeakersData,
  ourTeamData,
} from 'data';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section data={about} />
      <Section data={invite} />
      <Section data={aspect} />
      <GridSection
        data={ourPartnersData}
        title='Our Partners'
        link='Partners'
      />
      <GridSection data={ourSupportersData} title='Our Supporters' />
      <GridText title='Our Judges' data={ourJudges} link='Judges' />
      <GridText title='Our Speakers' data={ourSpeakersData} link='Speakers' />
      <GridText title='Our Team' data={ourTeamData} link='Team' />
      <Footer />
    </>
  );
};

export default Home;
