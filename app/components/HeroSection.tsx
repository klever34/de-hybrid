import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroSection: FC = () => {
  const router = useRouter();
  return (
    <section
      className="relative mt-20 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative container mx-auto">
        <div className="flex items-center pt-10 md:pt-20">
          <div className="w-full md:w-1/2 justify-center text-white p-5">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              {"MUSIC 'N' BOOKS"}
            </h1>
            <p className="pt-10 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              De-Hybrid Music - All songs written and composed by Roy Odoko (a
              member of Music Copyright Society of Nigeria)
            </p>
            <button
              onClick={() => {
                router.push("/#music");
              }}
              className="mt-10 bg-orange-500 text-white rounded-full flex items-center space-x-2 hover:bg-orange-600 transition"
            >
              <span className="px-6 py-3">Get started now</span>
              <div className="bg-white text-orange-600 rounded-full p-4">
                <FaArrowDown size={20} />
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
