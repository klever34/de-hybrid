import Image from "next/image";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection: FC = () => {
  return (
    <section className="bg-black mt-20 w-full px-20">
      <div className="items-center bg-black flex pt-20">
        <div className="w-[50%] pl-6 justify-center">
          <h1 className="text-9xl">{"ROCK 'N' READ"}</h1>
          <p className="pt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            impedit harum quis itaque eius laborum necessitatibus rerum nesciunt
            ea. Ducimus eos in aliquam sunt et numquam eligendi alias sequi
            optio.
          </p>
          <button className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center space-x-2 hover:bg-orange-700 transition">
            <span className="px-6 py-3">Get started now</span>
            <div className="bg-white text-orange-600 rounded-full p-5">
              <FaArrowRight size={20} />
            </div>
          </button>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image
            src="/hero-image.png"
            width={700}
            height={800}
            alt="Book Cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
