import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">De-Hybrid</div>
        </div>
        <div className="flex flex-col items-left items-end justify-start space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Music
          </a>
          <a href="#" className="hover:underline">
            Book
          </a>
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
        </div>
        {/* <div className="flex flex-col items-left items-end justify-start space-x-4">
          <a href="#" className="hover:underline">
            Payment
          </a>
          <a href="#" className="hover:underline">
            Discounts
          </a>
          <a href="#" className="hover:underline">
            Delivery
          </a>
          <a href="#" className="hover:underline">
            Order
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </div> */}
        <div className="flex flex-col items-left items-end justify-start space-x-4">
          <a href="#" className="hover:underline">
            News
          </a>
          <a href="#" className="hover:underline">
            Collections
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
        <div className="flex flex-col items-left items-end justify-start space-x-4">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Cookie policy
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
        <div>©{new Date().getFullYear()} De-Hybrid. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.507 0-9.96 4.453-9.96 9.96s4.453 9.96 9.96 9.96 9.96-4.453 9.96-9.96-4.453-9.96-9.96-9.96zm0 18.92c-4.945 0-8.96-4.015-8.96-8.96s4.015-8.96 8.96-8.96 8.96 4.015 8.96 8.96-4.015 8.96-8.96 8.96zm-4.48-9.16c0-1.389-1.121-2.52-2.52-2.52s-2.52 1.121-2.52 2.52 1.121 2.52 2.52 2.52 2.52-1.121 2.52-2.52zm8.92 0c0 1.389-1.121 2.52-2.52 2.52s-2.52-1.121-2.52-2.52 1.121-2.52 2.52-2.52 2.52 1.121 2.52 2.52zm0-8.92c0 1.389-1.121 2.52-2.52 2.52s-2.52-1.121-2.52-2.52 1.121-2.52 2.52-2.52 2.52 1.121 2.52 2.52zm-8.92 0c0 1.389-1.121 2.52-2.52 2.52s-2.52-1.121-2.52-2.52 1.121-2.52 2.52-2.52 2.52 1.121 2.52 2.52z" />
            </svg>
          </a>
          <a href="#" className="hover:underline">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.354 6.854c-.001-.032-.001-.064-.002-.096-.032-1.189-.132-2.082-.228-2.679-.096-.6-.293-1.188-.608-1.773-.315-.585-.732-1.068-1.255-1.445-.523-.378-1.112-.634-1.768-.769-.655-.135-1.321-.224-1.998-.266-1.35-.081-3.001-.126-4.953-.134h-.1c-1.952.008-3.602.053-4.952.134-.677.042-1.343.131-1.998.266-.656.135-1.245.391-1.768.769-.523.378-.94.861-1.255 1.445-.315.585-.512 1.173-.608 1.773-.096.597-.196 1.49-.228 2.679-.001.032-.001.064-.002.096-.032 1.268-.048 2.81-.051 4.621 0 1.812.019 3.353.051 4.621.001.032.001.064.002.096.032 1.189.132 2.082.228 2.679.096.6.293 1.188.608 1.773.315.585.732 1.068 1.255 1.445.523.378 1.112.634 1.768.769.655.135 1.321.224 1.998.266 1.35.081 3.001.126 4.953.134h.1c1.952-.008 3.602-.053 4.952-.134.677-.042 1.343-.131 1.998-.266.656-.135 1.245-.391 1.768-.769.523-.378.94-.861 1.255-1.445.315-.585.512-1.173.608-1.773.096-.597.196-1.49.228-2.679.001-.032.001-.064.002-.096.032-1.268.048-2.81.051-4.621 0-1.812-.019-3.353-.051-4.621zm-11.354 9.092c-3.053 0-5.53-2.477-5.53-5.53s2.477-5.53 5.53-5.53 5.53 2.477 5.53 5.53-2.477 5.53-5.53 5.53zm6.681-8.718c-1.217 0-2.204-.987-2.204-2.204 0-1.217.987-2.204 2.204-2.204 1.217 0 2.204.987 2.204 2.204 0 1.217-.987 2.204-2.204 2.204z" />
            </svg>
          </a>
          <a href="#" className="hover:underline">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.352c0 .732.592 1.324 1.324 1.324h11.485v-9.294h-3.109v-3.618h3.109v-2.673c0-3.086 1.885-4.766 4.639-4.766 1.319 0 2.452.098 2.781.142v3.225l-1.911.001c-1.498 0-1.788.711-1.788 1.753v2.309h3.576l-.466 3.618h-3.11v9.294h6.095c.732 0 1.324-.592 1.324-1.324v-21.352c0-.732-.592-1.324-1.324-1.324z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
