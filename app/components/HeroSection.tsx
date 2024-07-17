import Image from "next/image";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection: FC = () => {
  return (
    <section
      className="relative mt-20 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative container mx-auto">
        <div className="flex items-center pt-20">
          <div className="w-full md:w-1/2 justify-center text-white p-5">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              {"ROCK 'N' READ"}
            </h1>
            <p className="pt-10 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              impedit harum quis itaque eius laborum necessitatibus rerum
              nesciunt ea. Ducimus eos in aliquam sunt et numquam eligendi alias
              sequi optio.
            </p>
            <button className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center space-x-2 hover:bg-orange-700 transition">
              <span className="px-6 py-3">Get started now</span>
              <div className="bg-white text-orange-600 rounded-full p-2">
                <FaArrowRight size={20} />
              </div>
            </button>
          </div>
          <div className="hidden md:flex w-1/2 justify-end mt-40">
            <Image
              src="/hero-image.png"
              alt="Book Cover"
              height={4000}
              width={4000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
