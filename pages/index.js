import Head from 'next/head';

import {
  Hero,
  Section,
  GridSection,
  GridText,
  About,
  GiftCard,
  TrackList,
} from 'components/home';
import { Header, Footer } from 'components/layout';

import {
  about,
  invite,
  aspect,
  ourPartnersData,
  ourSupportersData,
  ourSpeakersData,
  ourTeamData,
  trackList,
} from 'data';

const Home = () => {
  return (
    <>
      <Head>
        <title>Coin Nations Summit 2021</title>
        <meta
          name='description'
          content='Coin Nations We’re showcasing the best crypto companies, leaders on one Coin Nations Global Summit'
        />
        <meta
          name='keywords'
          content='crypto bitcoin, ethereum, revolut, kraken, visa, circle'
        />
      </Head>
      <Header />
      <Hero />
      <Section data={about} />
      <About />
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
      <TrackList data={trackList} />
      <GiftCard />
      <Section data={aspect} />
      <GridText title='Our Speakers' data={ourSpeakersData} link='Speakers' />
      <GridText title='Our Team' data={ourTeamData} link='Team' />
      <Footer />
    </>
  );
};

export default Home;
