"use client";

import { FC, useState, useRef, useContext } from "react";
import AppContext from "@context/AppContext";
import { Book, formatToNaira } from "@/utils/types/books";
import { staticVideos } from "@/utils/videos_list";

interface CartItem extends Book {
  quantity: number;
}

const VideosCollection: FC = () => {
  const { setGlobalState } = useContext(AppContext);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = (fileUrl: string) => {
    if (currentVideo === fileUrl) {
      if (videoRef.current?.paused) {
        videoRef.current.play();
      } else {
        videoRef.current?.pause();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }

      const newVideo = document.getElementById(
        `video-${fileUrl}`
      ) as HTMLVideoElement;
      if (newVideo) {
        videoRef.current = newVideo;
        newVideo.play();
        setCurrentVideo(fileUrl);

        newVideo.onended = () => setCurrentVideo(null);
      }
    }
  };

  const handleAddToCart = (video: Book) => {
    setGlobalState((prevState) => {
      const cartItems = Array.isArray(prevState.cart.book)
        ? prevState.cart.book
        : [];

      const existingIndex = cartItems.findIndex((item) => item.id === video.id);
      const updatedCart = [...cartItems];
      let updatedTotalAmount = prevState.cart.totalAmount;
      let updatedTotalCount = prevState.cart.totalCount;

      if (existingIndex !== -1) {
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: (updatedCart[existingIndex].quantity ?? 1) + 1,
        };
      } else {
        updatedCart.push({ ...video, quantity: 1 });
      }

      updatedTotalAmount += video.price;
      updatedTotalCount += 1;

      return {
        ...prevState,
        cart: {
          book: updatedCart,
          totalAmount: updatedTotalAmount,
          totalCount: updatedTotalCount,
        },
      };
    });
  };

  return (
    <section id="videos" className="py-16 bg-fb-grey-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          VIDEOS COLLECTION
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staticVideos.map((video, index) => (
            <div
              key={`${index}-${video.title}`}
              className="bg-fb-grey-900 rounded-lg p-4 w-[85%] flex flex-col self-center"
            >
              <div className="relative w-full aspect-video mb-4">
                <video
                  id={`video-${video.fileUrl}`}
                  src={video.fileUrl}
                  className="rounded-lg w-full h-full object-cover"
                  controls={false}
                />

                <button
                  onClick={() => handlePlayPause(video.fileUrl)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-4xl"
                >
                  {currentVideo === video.fileUrl &&
                  videoRef.current &&
                  !videoRef.current.paused
                    ? "❚❚"
                    : "▶"}
                </button>
              </div>

              <div className="text-center md:text-left px-2">
                <h3 className="text-lg font-bold">{video.title}</h3>
                <div className="text-gray-400">{video.artist}</div>
                <div className="text-orange-500 font-bold mt-2">
                  {formatToNaira(video.price)}
                </div>

                {/* Uncomment below to enable Add to Cart */}
                {/* <button
                  className="bg-orange-500 text-white px-2 py-2 rounded-lg mt-4 hover:bg-orange-600 transition text-xs"
                  onClick={() => handleAddToCart(video)}
                >
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosCollection;
