"use client";

import AboutSection from "@components/AboutSection";
import HeroSection from "@components/HeroSection";
import MusicCollection from "@components/MusicCollection";
import PromoSlider from "@components/PromoSlider";
import VideosCollection from "@components/VideosCollection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <PromoSlider />
      <AboutSection />
      <VideosCollection />
      <MusicCollection />
      {/* <BooksCollection /> */}
    </>
  );
};

export default Home;
