import { useState } from 'react';
import Head from 'next/head';

import {
  Hero,
  Section,
  GridSection,
  GridText,
  About,
  GiftCard,
  TrackList,
  Agenda,
  Contact,
} from 'components/home';
import { Header, Footer } from 'components/layout';

import { sendMessage } from 'services';
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
  const [sentSuccess, setSentSuccess] = useState(false);

  const sendContact = (values) => {
    sendMessage(values);
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
    }, 10000);
  };

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
      <GridSection
        data={ourSupportersData}
        title='Supporters'
        link='Supporters'
      />
      <Section data={about} />
      {/* <GridSection
        data={ourPartnersData}
        title='Past Partners'
        link='Partners'
      /> */}
      <GridText title='Our Speakers' data={ourSpeakersData} link='Speakers' />
      <Section data={invite} />
      <About />
      <Agenda />
      <TrackList data={trackList} />
      <Section data={aspect} />
      {/* <GiftCard /> */}
      <GridText title='Our Team' data={ourTeamData} link='Team' />
      <Contact onSubmit={sendContact} success={sentSuccess} />
      <Footer />
    </>
  );
};

export default Home;
