import Image from "next/image";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <>
      <GradientComponent />
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-10 pb-24 bg-black"
      >
        <div className="px-8 md:px-0 mb-8">
          <Image
            src="/sir_roy.jpeg"
            alt="Person with headphones"
            className="rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="max-w-lg md:ml-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white mb-4 md:ml-8">
            About Us
          </h2>
          <p className="text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg text-white mb-8 font-light px-8">
            {`Robinson Roy Odoko, popularly known as Roy, is a former Nigerian
            national tennis player and a product of the prestigious Government
            College Ughelli, Delta State. Roy Odoko is an accomplished author.
            He wrote the first comprehensive tennis book in Nigeria, "Tennis for
            Health and Wealth". Roy Odoko is also a music writer, music composer
            and music producer who has so many songs in his repertoire; and he
            is a member of the Musical Copyright Society of Nigeria (MCSN). Roy
            Odoko is the leader of De-Hybrid Band, a recording but not a
            performing musical band.`}
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

const GradientComponent = () => {
  return (
    <div className="hidden md:flex bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 ">
      <div className="container mx-auto flex flex-wrap justify-between md:space-x-4">
        {[
          "Tense",
          "Romantic",
          "Somber",
          "Serene",
          "Hopeful",
          "Nostalgic",
          "Joyful",
          "Dramatic",
          "Mysterious",
          "Lively",
          "Gospel",
        ].map((item, index) => (
          <span key={index} className="px-2 text-xl whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
