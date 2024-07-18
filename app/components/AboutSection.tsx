import Image from "next/image";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <>
      <GradientComponent />
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 bg-black"
      >
        <div className="px-8 md:px-0 mb-8">
          <Image
            src="/listening-man.png"
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
            Lorem ipsum dolor sit amet consectetur. Quam risus purus volutpat
            elit pellentesque quam proin pulvinar. Feugiat egestas turpis
            faucibus gravida pharetra egestas viverra. Praesent amet quis
            pulvinar eget nulla. Tempor auctor habitant dignissim mi mauris
            habitasse eu malesuada.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-700 transition md:ml-8">
            Read more
          </button>
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
