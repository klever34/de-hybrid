import Image from "next/image";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <>
      <GradientComponent />
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 bg-black">
        <div className="">
          <Image
            src="/listening-man.png"
            alt="Person with headphones"
            className="rounded-lg mr-20"
            width={600}
            height={500}
          />
        </div>
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-lg text-white mb-8">
            Lorem ipsum dolor sit amet consectetur. Quam risus purus volutpat
            elit pellentesque quam proin pulvinar. Feugiat egestas turpis
            faucibus gravida pharetra egestas viverra. Praesent amet quis
            pulvinar eget nulla. Tempor auctor habitant dignissim mi mauris
            habitasse eu malesuada.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-700 transition">
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
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 mt-[-1rem]">
      <div className="container mx-auto flex justify-between space-x-4">
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
          <span key={index} className="px-2 text-xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
