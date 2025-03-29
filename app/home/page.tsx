"use client";

import AboutSection from "@components/AboutSection";
import HeroSection from "@components/HeroSection";
import MusicCollection from "@components/MusicCollection";
import VideosCollection from "@components/VideosCollection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MusicCollection />
      <VideosCollection />
      {/* <BooksCollection /> */}
    </>
  );
};

export default Home;
