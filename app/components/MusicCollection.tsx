import { FC, useState, useRef } from "react";
import Image from "next/image";

const albums = [
  {
    title: "Thank you My Mama",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1733752470/thank_you_my_mama_vxn9yo.mp3",
  },
  {
    title: "What a Great Day",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1733753198/what_a_great_day_a3l8ku.mp3",
  },
  {
    title: "Koko Na Nigger",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1733755889/koko_na_nigger_zd2ugu.mp3",
  },
  {
    title: "Staircase Singer",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734605952/staircase_singer_rxthhb.mp3",
  },
  {
    title: "Official Corruption",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734608714/official_corruption_ooytuk.mp3",
  },
  {
    title: "Mr Fumbler",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734608713/mr_fumbler_u3rqsv.mp3",
  },
  {
    title: "Mr Lazy Man",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734608714/mr_lazy_man_ykfido.mp3",
  },
  {
    title: "Kokobiliko",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734608714/mr_lazy_man_ykfido.mp3",
  },
  {
    title: "Jesus Christ is Lord",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734609076/jesus_christ_is_lord_edhx1i.mp3",
  },
  {
    title: "I Get One Friend",
    artist: "Roy Odoko",
    price: "₦1,800.00",
    imageUrl: "/music-icon-bg.jpg",
    fileUrl:
      "https://res.cloudinary.com/dxibkvmpl/video/upload/v1734609261/i_get_one_friend_inxn8g.mp3",
  },
];

const MusicCollection: FC = () => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (fileUrl: string) => {
    if (currentTrack === fileUrl) {
      if (audioRef.current?.paused) {
        audioRef.current.play();
      } else {
        audioRef?.current?.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(fileUrl);
      audioRef.current.play();
      setCurrentTrack(fileUrl);

      audioRef.current.onended = () => setCurrentTrack(null);
    }
  };

  return (
    <section id="music" className="py-16 bg-fb-grey-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:4xl font-bold mb-8 text-center md:text-left">
          MUSIC COLLECTIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <div
              key={`${index}-${album.title}`}
              className="bg-fb-grey-900 rounded-lg p-4 w-[85%] flex self-center"
            >
              <div className="relative w-full p-6 md:p-0">
                <Image
                  src={album.imageUrl}
                  alt={album.title}
                  className="rounded-lg mb-4 w-full"
                  width={100}
                  height={100}
                />
                <button
                  onClick={() => handlePlayPause(album.fileUrl)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-4xl"
                >
                  {currentTrack === album.fileUrl &&
                  audioRef.current &&
                  !audioRef.current.paused
                    ? "❚❚"
                    : "▶"}
                </button>
              </div>
              <div className="text-center md:text-left ml-2 mt-6">
                <div className="text-sm text-gray-400">ALBUM</div>
                <h3 className="text-lg font-bold">{album.title}</h3>
                <div className="text-gray-400">{album.artist}</div>
                <div className="text-orange-500 font-bold mt-2">
                  {album.price}
                </div>
                <button
                  className="bg-orange-500 text-white px-2 py-2 rounded-lg mt-4 hover:bg-orange-600 transition"
                  style={{ fontSize: 10 }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition mx-1">
            &lt;
          </button>
          {[1, 2, 3, 4, "...", albums.length].map((page, index) => (
            <button
              key={`${index}-${page}`}
              className="text-white px-4 py-2 rounded-full mx-1 hover:underline"
            >
              {page}
            </button>
          ))}
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition mx-1">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicCollection;
