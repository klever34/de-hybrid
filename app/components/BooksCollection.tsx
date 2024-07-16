import Image from "next/image";
import { FC } from "react";

const albums = Array(8).fill({
  title: "Life of Man",
  author: "Roy Odoko",
  price: "₦1,000.00",
  imageUrl: "/book-cover.jpg",
});

const BooksCollection: FC = () => {
  return (
    <section className="py-16 bg-fb-grey-950 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">BOOK COLLECTION</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <div key={index} className="bg-fb-grey-900 rounded-lg p-4">
              <Image
                src={album.imageUrl}
                alt={album.title}
                className="rounded-lg mb-4 w-full"
                width={100}
                height={100}
              />
              <div className="text-sm text-gray-400">ALBUM</div>
              <h3 className="text-xl font-bold">{album.title}</h3>
              <div className="text-gray-400">{album.author}</div>
              <div className="text-orange-500 font-bold mt-2">
                {album.price}
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition mx-1">
            &lt;
          </button>
          {[1, 2, 3, 4, "...", 30].map((page, index) => (
            <button
              key={index}
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

export default BooksCollection;
