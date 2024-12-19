"use client";

import AboutSection from "@components/AboutSection";
import BooksCollection from "@components/BooksCollection";
import HeroSection from "@components/HeroSection";
import MusicCollection from "@components/MusicCollection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MusicCollection />
      {/* <BooksCollection /> */}
    </>
  );
};

export default Home;
