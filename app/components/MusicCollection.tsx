import { FC, useState, useRef, useContext } from "react";
import Image from "next/image";
import { staticMusicList } from "@/utils/book_list";
import AppContext from "@context/AppContext";
import { Book, formatToNaira } from "@/utils/types/books";

interface CartItem extends Book {
  quantity: number;
}

const MusicCollection: FC = () => {
  const { setGlobalState } = useContext(AppContext);
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

  const handleAddToCart = (album: Book) => {
    setGlobalState((prevState) => {
      // Ensure cart.book is an array
      const cartItems = Array.isArray(prevState.cart.book)
        ? prevState.cart.book
        : [];

      const existingBookIndex = cartItems.findIndex(
        (item) => item.id === album.id
      );

      let updatedCart = [...cartItems];
      let updatedTotalAmount = prevState.cart.totalAmount;
      let updatedTotalCount = prevState.cart.totalCount;

      if (existingBookIndex !== -1) {
        // If the item exists, update the quantity
        updatedCart[existingBookIndex] = {
          ...updatedCart[existingBookIndex],
          quantity: (updatedCart[existingBookIndex].quantity ?? 1) + 1,
        };
      } else {
        // Add new item to cart with quantity
        updatedCart.push({ ...album, quantity: 1 });
      }

      updatedTotalAmount += album.price;
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
    <section id="music" className="py-16 bg-fb-grey-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:4xl font-bold mb-8 text-center md:text-left">
          MUSIC COLLECTIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {staticMusicList.map((album, index) => (
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
                {/* <div className="text-sm text-gray-400">ALBUM</div> */}
                <h3 className="text-lg font-bold">{album.title}</h3>
                <div className="text-gray-400">{album.artist}</div>
                <div className="text-orange-500 font-bold mt-2">
                  {formatToNaira(album.price)}
                </div>
                <button
                  className="bg-orange-500 text-white px-2 py-2 rounded-lg mt-4 hover:bg-orange-600 transition"
                  style={{ fontSize: 10 }}
                  onClick={() => handleAddToCart(album)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition mx-1">
            &lt;
          </button>
          {[1, 2, 3, 4, "...", staticMusicList.length].map((page, index) => (
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
        </div> */}
      </div>
    </section>
  );
};

export default MusicCollection;
